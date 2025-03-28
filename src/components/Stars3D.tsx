import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useRef, useState } from 'react';
// @ts-expect-error - maath/random doesn't have proper TypeScript types
import * as random from 'maath/random/dist/maath-random.esm';
import * as THREE from 'three';
import type { Points as PointsType } from 'three';

export function Stars3D() {
  const ref = useRef<PointsType>(null);
  const [stars] = useState(() => {
    const starsArray = random.inSphere(new Float32Array(15000), { radius: 2 });
    // Ajouter quelques trous noirs (positions aléatoires avec taille variable)
    for (let i = 0; i < 5; i++) {
      const idx = Math.floor(Math.random() * 5000) * 3;
      starsArray[idx] *= 5; // Position X
      starsArray[idx+1] *= 5; // Position Y 
      starsArray[idx+2] *= 5; // Position Z
    }
    return starsArray;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={stars} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.006}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}
