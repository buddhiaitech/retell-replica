/* eslint-disable @typescript-eslint/no-explicit-any */
export default function GridLayout() {
  const gridStyles: any = {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gridTemplateRows: 'repeat(6, 1fr)',
    gap: '8px',
    width: '100%',
    height: '400px',
  };

  const colors = ['#ccccff', '#1c39bb', '#e8ebf8', '#d1d5db', '#8e9cdd'];
  const shuffledColors = [...colors].sort(() => Math.random() - 0.5);

  const getItemStyles = (index: number): any => ({
    backgroundColor: shuffledColors[index],
    color: shuffledColors[index] === '#1c39bb' ? '#fff' : '#000',
    borderRadius: '5px',
    padding: '20px',
    fontSize: '150%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  });

  const itemPositions: Record<string, any> = {
    item0: { gridColumn: '1 / span 4', gridRow: '1 / span 2' },
    item1: { gridColumn: '5 / span 2', gridRow: '1 / span 3' },
    item2: { gridColumn: '1 / span 2', gridRow: '3 / span 4' },
    item3: { gridColumn: '3 / span 2', gridRow: '3 / span 4' },
    item4: { gridColumn: '5 / span 2', gridRow: '4 / span 3' },
  };

  const content: Record<number, { title: string; description: string }> = {
    0: {
      title: 'Fully Compliant Platform',
      description:
        'Retell is SOC 2 Type 1&2, HIPAA, and GDPR compliant, meeting all industry compliance standards.',
    },
    1: {
      title: 'Voice AI API',
      description: 'Natural, smooth, and empathetic AI conversations with only 500ms latency.',
    },
    2: {
      title: 'Multilingual Support',
      description: 'Support 18+ languages, can dial to any countries phone numbers',
    },
    3: {
      title: 'Multilingual Support',
      description: 'Support 18+ languages, can dial to any countries phone numbers',
    },
    4: {
      title: 'Reliable and Stable Platform You can trust',
      description:
        'With average 99.99% uptime and effortless fallback. Retell AI ensures your phone callers are always production-ready.',
    },
  };

  return (
    <div className="p-4">
      <div style={gridStyles}>
        <div style={{ ...getItemStyles(0), ...itemPositions.item0 }}>
          <div>
            <h3 style={{ fontSize: '0.9em', fontWeight: 'bold', marginBottom: '6px' }}>{content[0].title}</h3>
            <p style={{ fontSize: '0.6em', lineHeight: '1.3' }}>{content[0].description}</p>
          </div>
        </div>
        <div style={{ ...getItemStyles(1), ...itemPositions.item1 }}>
          <div>
            <h3 style={{ fontSize: '0.9em', fontWeight: 'bold', marginBottom: '6px' }}>{content[1].title}</h3>
            <p style={{ fontSize: '0.6em', lineHeight: '1.3' }}>{content[1].description}</p>
          </div>
        </div>
        <div style={{ ...getItemStyles(2), ...itemPositions.item2 }}>
          <div>
            <h3 style={{ fontSize: '0.9em', fontWeight: 'bold', marginBottom: '6px' }}>{content[2].title}</h3>
            <p style={{ fontSize: '0.6em', lineHeight: '1.3' }}>{content[2].description}</p>
          </div>
        </div>
        <div style={{ ...getItemStyles(3), ...itemPositions.item3 }}>
          <div>
            <h3 style={{ fontSize: '0.9em', fontWeight: 'bold', marginBottom: '6px' }}>{content[3].title}</h3>
            <p style={{ fontSize: '0.6em', lineHeight: '1.3' }}>{content[3].description}</p>
          </div>
        </div>
        <div style={{ ...getItemStyles(4), ...itemPositions.item4 }}>
          <div>
            <h3 style={{ fontSize: '0.9em', fontWeight: 'bold', marginBottom: '6px' }}>{content[4].title}</h3>
            <p style={{ fontSize: '0.6em', lineHeight: '1.3' }}>{content[4].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}


