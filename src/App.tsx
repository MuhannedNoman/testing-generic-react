import React, { useState } from 'react';

interface Props {
  name: string;
}

const HelloWorld: React.FC<Props> = ({ name }) => {
  const [state] = useState<{ fullName: string | null }>({ fullName: '' });
  // state.fullName

  return <div>Hello {name}</div>;
};

const App: React.FC = () => {
  return <div>Hello</div>;
};

export default App;
