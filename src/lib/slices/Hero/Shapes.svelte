<script lang="ts">
	import { T as Threlte } from '@threlte/core';
	import * as THREE from 'three';
	import Geometry from './Geometry.svelte';
	import { ContactShadows, Environment, interactivity, transitions } from '@threlte/extras';

	interactivity();
	transitions();
</script>

<Threlte.PerspectiveCamera
	makeDefault
	position={[0, 0, 25]}
	aspect={1}
	fov={30}
	near={1}
	far={40}
/>

<Environment files="smallroom.hdr" path="/" format="hdr" />
<ContactShadows position={[0, -3.5, 0]} opacity={0.65} scale={40} blur={1} far={9} />

<Geometry position={[0, 0, 0]} rate={0.3} geometry={new THREE.IcosahedronGeometry(2.5)} />
<Geometry
	position={[1, -0.75, 4]}
	rate={0.6}
	geometry={new THREE.TorusKnotGeometry(8.55, 2.574, 19, 6, 6, 3)}
	scale={[0.05, 0.05, 0.05]}
/>
<Geometry position={[-1.4, 2.5, -7]} rate={0.8} geometry={new THREE.DodecahedronGeometry(2)} />

<Geometry
	position={[-0.8, -1.1, 5]}
	rate={0.5}
	geometry={new THREE.TorusGeometry(10, 6.7, 16, 100, 6.28318)}
	scale={[0.05, 0.05, 0.05]}
/>
<Geometry position={[1.6, 1.6, -4]} rate={0.7} geometry={new THREE.OctahedronGeometry(1)} />
