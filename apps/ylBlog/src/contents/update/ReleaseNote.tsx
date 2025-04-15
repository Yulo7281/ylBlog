type ReleaseNoteProps = {
  version: string;
  date: string;
  children: React.ReactNode;
};

export function ReleaseNote({ version, date, children }: ReleaseNoteProps) {
  return (
    <div style={{ marginBottom: '24px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid #e0e0e0',
          paddingBottom: '15px',
          marginBottom: '15px',
          marginTop: '50px',
        }}
      >
        <span style={{ fontWeight: 'bold', color: '#aaa', fontSize: '1.5rem' }}>
          📦 {version}
        </span>
        <span style={{ color: '#aaa', fontSize: '1rem' }}>📅 {date}</span>
      </div>
      <div>{children}</div>
    </div>
  );
}
