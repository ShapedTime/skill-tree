# ADR-005: Visualization Library Selection

**Status**: Accepted
**Date**: 2025-09-13
**Decision Makers**: Software Architect, Product Owner
**Consulted**: UI/UX Developer, Development Team
**Informed**: All Stakeholders

## Context

SkillTree's core feature is the visual representation of learning paths as interactive skill trees. The visualization must support:

- **Interactive Skill Trees**: Clickable nodes with hover states and animations
- **Graph Layouts**: Automatic positioning of skills with dependency relationships
- **Visual Hierarchy**: Clear representation of skill levels and prerequisites
- **Performance**: Smooth rendering of large skill trees (100+ nodes)
- **Responsive Design**: Works on mobile, tablet, and desktop devices
- **PWA Integration**: Offline-capable visualization with cached data

## Decision

We will use **Cytoscape.js** as our primary visualization library for skill tree rendering.

### Selected Visualization Stack:

- **Core Library**: Cytoscape.js 3.x (graph theory and visualization)
- **Layout Engine**: Dagre layout algorithm for hierarchical DAGs
- **Styling**: CSS-based node and edge styling with themes
- **React Integration**: Custom React wrapper component
- **Performance**: Canvas rendering for large graphs

## Options Considered

### Visualization Libraries
| Option | Pros | Cons | Decision |
|--------|------|------|----------|
| **Cytoscape.js** ✅ | • Built for graph visualization<br>• DAG layout algorithms<br>• Touch/mobile support<br>• Extensible plugin system<br>• Performance optimized | • Learning curve<br>• Custom styling complexity<br>• React integration manual | **SELECTED** |
| D3.js | • Maximum flexibility<br>• Rich ecosystem<br>• Custom animations<br>• SVG/Canvas support | • High complexity<br>• Development time<br>• Mobile touch handling | Rejected |
| React Flow | • React-native<br>• Good TypeScript support<br>• Built-in controls<br>• Easy integration | • Flow diagram focus<br>• Limited layout algorithms<br>• Not optimized for trees | Rejected |

### Layout Algorithms
| Option | Pros | Cons | Decision |
|--------|------|------|----------|
| **Dagre** ✅ | • Hierarchical DAG layout<br>• Automatic node positioning<br>• Minimizes edge crossings<br>• Skill tree appropriate | • Fixed layout style<br>• Limited customization | **SELECTED** |
| Force-directed | • Organic appearance<br>• Dynamic positioning<br>• Good for clustering | • Unstable layouts<br>• Poor for hierarchies<br>• Performance issues | Rejected |
| Manual/Grid | • Full control<br>• Predictable positions<br>• Simple implementation | • Manual positioning required<br>• No dependency awareness<br>• Scaling difficulties | Rejected |

## Rationale

### Why Cytoscape.js?
1. **Graph-First Design**: Purpose-built for network and graph visualization
2. **DAG Support**: Native directed acyclic graph handling perfect for skill trees
3. **Performance**: Canvas rendering handles large skill trees efficiently
4. **Mobile Ready**: Touch gestures, pinch-to-zoom, pan navigation built-in
5. **Extensible**: Plugin ecosystem for additional layouts and features

### Skill Tree Visualization Requirements
```typescript
// Example skill tree structure
interface SkillNode {
  id: string;
  name: string;
  description: string;
  level: number;          // Skill difficulty level
  dependencies: string[]; // Required skill IDs
  status: 'locked' | 'available' | 'in_progress' | 'completed';
  position?: { x: number; y: number }; // Optional manual positioning
}

// Cytoscape.js element format
const cytoscapeElements = [
  // Nodes (skills)
  {
    data: {
      id: 'javascript-basics',
      name: 'JavaScript Basics',
      level: 1,
      status: 'completed'
    }
  },
  // Edges (dependencies)
  {
    data: {
      id: 'edge-1',
      source: 'javascript-basics',
      target: 'react-fundamentals'
    }
  }
];
```

### Layout Strategy
```typescript
// Dagre layout configuration for skill trees
const layoutOptions = {
  name: 'dagre',
  rankDir: 'TB',        // Top-to-bottom hierarchy
  spacingFactor: 1.2,   // Spacing between nodes
  nodeDimensionsIncludeLabels: true,
  animate: true,        // Smooth layout transitions
  animationDuration: 500
};
```

## Consequences

### Positive
- **User Experience**: Intuitive, game-like skill tree navigation
- **Performance**: Smooth interactions even with large skill trees
- **Responsive**: Works excellently on mobile devices
- **Maintainable**: Clear separation between data and visualization
- **Extensible**: Can add new layouts and interaction patterns

### Negative
- **Complexity**: Requires learning Cytoscape.js concepts and API
- **Custom Styling**: CSS-based styling has limitations vs programmatic styling
- **React Integration**: Manual integration work required

### Risks and Mitigation
- **Risk**: Performance degradation with very large skill trees
  - **Mitigation**: Implement lazy loading and level-based filtering
- **Risk**: Mobile interaction complexity
  - **Mitigation**: Extensive mobile testing and touch optimization
- **Risk**: Accessibility challenges with canvas rendering
  - **Mitigation**: Implement keyboard navigation and screen reader support

## Visual Design System

### Node Types and States
```css
/* Skill node states */
.skill-locked {
  background-color: #64748b;
  border-color: #475569;
  opacity: 0.6;
}

.skill-available {
  background-color: #3b82f6;
  border-color: #2563eb;
  cursor: pointer;
}

.skill-in-progress {
  background-color: #f59e0b;
  border-color: #d97706;
  animation: pulse 2s infinite;
}

.skill-completed {
  background-color: #10b981;
  border-color: #059669;
}

/* Skill levels */
.skill-beginner { border-width: 2px; }
.skill-intermediate { border-width: 3px; }
.skill-advanced { border-width: 4px; }
.skill-expert { border-width: 5px; }
```

### Interactive Features
- **Hover Effects**: Node highlighting and tooltip display
- **Click Actions**: Skill details modal or navigation
- **Zoom Controls**: Mouse wheel and button controls
- **Pan Navigation**: Click and drag to explore large trees
- **Path Highlighting**: Show skill prerequisites and dependents

## React Integration

### Cytoscape React Component
```typescript
interface SkillTreeProps {
  skills: SkillNode[];
  onSkillClick: (skillId: string) => void;
  userProgress: Record<string, SkillStatus>;
  theme: 'light' | 'dark';
}

const SkillTree: React.FC<SkillTreeProps> = ({
  skills,
  onSkillClick,
  userProgress,
  theme
}) => {
  const cyRef = useRef<cytoscape.Core | null>(null);

  useEffect(() => {
    // Initialize Cytoscape instance
    cyRef.current = cytoscape({
      container: containerRef.current,
      elements: convertSkillsToElements(skills),
      style: getSkillTreeStyle(theme),
      layout: { name: 'dagre', rankDir: 'TB' }
    });

    // Event listeners
    cyRef.current.on('tap', 'node', (event) => {
      const skillId = event.target.data('id');
      onSkillClick(skillId);
    });

    return () => cyRef.current?.destroy();
  }, [skills, theme]);

  // Update user progress visualization
  useEffect(() => {
    updateNodeStates(cyRef.current, userProgress);
  }, [userProgress]);

  return <div ref={containerRef} className="skill-tree-container" />;
};
```

### Data Transformation
```typescript
const convertSkillsToElements = (skills: SkillNode[]): cytoscape.ElementDefinition[] => {
  const elements: cytoscape.ElementDefinition[] = [];

  // Add skill nodes
  skills.forEach(skill => {
    elements.push({
      data: {
        id: skill.id,
        label: skill.name,
        level: skill.level,
        status: skill.status
      }
    });
  });

  // Add dependency edges
  skills.forEach(skill => {
    skill.dependencies.forEach(depId => {
      elements.push({
        data: {
          id: `${depId}-${skill.id}`,
          source: depId,
          target: skill.id
        }
      });
    });
  });

  return elements;
};
```

## Performance Optimization

### Large Tree Handling
- **Level Filtering**: Show only adjacent skill levels to reduce complexity
- **Viewport Culling**: Hide nodes outside visible area
- **Lazy Loading**: Load skill details on demand
- **Debounced Updates**: Batch user progress updates

### Memory Management
- **Component Cleanup**: Proper Cytoscape instance destruction
- **Event Listener Management**: Remove listeners on unmount
- **Image Optimization**: Efficient skill icon loading and caching

## Accessibility Features

### Keyboard Navigation
- **Tab Navigation**: Move between available skills
- **Enter/Space**: Activate skill selection
- **Arrow Keys**: Navigate skill dependencies
- **Escape**: Close skill details

### Screen Reader Support
- **ARIA Labels**: Descriptive labels for all interactive elements
- **Role Attributes**: Proper semantic roles for graph elements
- **Live Regions**: Announce skill state changes
- **Alternative Text**: Text descriptions for visual elements

## Implementation Plan

### Phase 1: Core Visualization (Week 5)
- [ ] Set up Cytoscape.js with React integration
- [ ] Implement basic skill tree rendering with Dagre layout
- [ ] Create skill node styling system with states
- [ ] Add basic click and hover interactions
- [ ] Implement zoom and pan controls

### Phase 2: Advanced Features (Week 5-6)
- [ ] Add skill dependency path highlighting
- [ ] Implement smooth animations and transitions
- [ ] Create responsive design for mobile devices
- [ ] Add skill filtering and search capabilities
- [ ] Implement theme switching (light/dark mode)

### Phase 3: Performance & UX (Week 6)
- [ ] Optimize rendering for large skill trees
- [ ] Add keyboard navigation and accessibility features
- [ ] Implement skill tree persistence (save zoom/pan state)
- [ ] Add progress visualization and animations
- [ ] Create comprehensive mobile touch interactions

### Phase 4: Integration (Week 6-7)
- [ ] Connect to backend API for skill tree data
- [ ] Integrate with user progress tracking
- [ ] Add skill detail modals and navigation
- [ ] Implement offline skill tree caching
- [ ] Create skill tree export/sharing features

## Testing Strategy

### Visual Testing
- **Screenshot Testing**: Automated visual regression testing
- **Cross-browser**: Chrome, Firefox, Safari compatibility
- **Mobile Testing**: iOS Safari, Android Chrome testing
- **Performance Testing**: Large skill tree rendering benchmarks

### Interaction Testing
- **Touch Gestures**: Pinch zoom, pan, tap interactions on mobile
- **Keyboard Navigation**: Full accessibility keyboard testing
- **User Flows**: Complete skill tree exploration scenarios
- **Edge Cases**: Empty trees, single nodes, circular dependencies

## Future Enhancements

### Advanced Features
- **Animated Paths**: Show learning progression with animated paths
- **3D Visualization**: Optional 3D skill tree representation
- **Collaborative Trees**: Multi-user skill tree exploration
- **Custom Layouts**: User-customizable skill tree arrangements
- **Mini-map**: Navigation aid for very large skill trees

### Integration Possibilities
- **Skill Recommendations**: AI-powered next skill suggestions
- **Social Features**: Share skill trees and progress with friends
- **Gamification**: Skill tree completion rewards and achievements
- **Analytics**: Track user interaction patterns and preferences

---

**Decision Status**: ✅ **APPROVED** by Product Owner on 2025-09-13
**Next Review**: Sprint 3 (Week 6) - User experience testing and performance evaluation
**Related ADRs**: ADR-001 (Frontend), ADR-002 (Backend), ADR-003 (Database)