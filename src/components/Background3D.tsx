import { useContext } from 'react';
import { ThemeContext } from './ThemeToggle';
import { Canvas } from '@react-three/fiber';
import { Stars3D } from './Stars3D';

export function Background3D() {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className="fixed inset-0 -z-10">
      <div 
        className="w-full h-full"
        style={{ background: isDark ? '#000000' : '#ffffff' }}
      />
      <Canvas className="absolute inset-0">
        <Stars3D />
      </Canvas>
    </div>
  );
}
