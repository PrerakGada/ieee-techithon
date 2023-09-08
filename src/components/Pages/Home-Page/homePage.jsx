import { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { CameraShake, OrbitControls } from "@react-three/drei";
import { KernelSize } from "postprocessing";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Model } from "./model";
import "./home.css";
import Overlay from "./overlay";

export default function HomePage(props) {
	const overlay = props.overlay;
	const caption = props.caption;
	const scroll = props.scroll;
	const isMobile = props.isMobile;
	console.log(isMobile);

	// press next button in carousel
	useEffect(() => {
		const timeoutRef = setTimeout(() => {
			//   Array(
			// 	...Array(...document.querySelectorAll(".mySwiper")).slice(-1)[0]
			// 		.children
			// )
			// 	.slice(-2)[0]
			// 	.click();

			Array(...document.querySelectorAll(".mySwiper")).forEach(
				(carousel) => {
					[...carousel.children].slice(-2)[0].click();
				}
			);
		}, 3000);

		return () => clearTimeout(timeoutRef);
	}, []);

	return (
		<>
			<div id="container">
				<Canvas
					className="canvas"
					dpr={[1, 1.5]}
					camera={{ position: [0, 0, 15] }}
					onCreated={
						isMobile
							? null
							: (state) => state.events.connect(overlay.current)
					}
				>
					<color attach="background" args={["black"]} />
					<ambientLight />
					<OrbitControls
						enableZoom={false}
						enablePan={false}
						enableRotate={false}
					/>
					<Suspense fallback={null}>
						<Model scroll={scroll} />
						<EffectComposer multisampling={8}>
							<Bloom
								kernelSize={3}
								luminanceThreshold={0}
								luminanceSmoothing={0.4}
								intensity={0.6}
							/>
							<Bloom
								kernelSize={KernelSize.HUGE}
								luminanceThreshold={0}
								luminanceSmoothing={0}
								intensity={2}
							/>
						</EffectComposer>
					</Suspense>
					<CameraShake
						yawFrequency={0.2}
						pitchFrequency={0.2}
						rollFrequency={0.2}
					/>
				</Canvas>
				<Overlay ref={overlay} caption={caption} scroll={scroll} />
			</div>
		</>
	);
}
