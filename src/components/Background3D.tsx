import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { useContext } from 'react';
import { ThemeContext } from './ThemeToggle';

export function Background3D() {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: isDark ? '#000000' : '#ffffff' }}
      >
        <Stars
          radius={300}
          depth={50}
          count={1000}
          factor={2}
          fade
          speed={0.5}
        />
      </Canvas>
    </div>
  );
}