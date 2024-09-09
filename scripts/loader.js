// document.addEventListener("DOMContentLoaded", function() {

//     const loader = document.createElement('div');

//     loader.id = 'loader';

//     loader.style.position = 'fixed';

//     loader.style.top = '0';

//     loader.style.left = '0';

//     loader.style.width = '100%';

//     loader.style.height = '100%';

//     loader.style.backgroundColor = '#565656';

//     loader.style.display = 'flex';

//     loader.style.justifyContent = 'center';

//     loader.style.alignItems = 'center';

//     loader.style.zIndex = '1000';

//     loader.style.transition = 'transform 1s ease-in-out';

//     // Add a loading spinner or text if desired
//     loader.innerHTML = `<div class="easel">
// 	<div class="canvas">
// 		<div class="painting"></div>
// 	</div>
// 	<div class="shadow"></div>
// </div>
// <div class="bob">
// 	<div class="head">
// 		<div class="fro"></div>
// 		<div class="face"></div>
// 		<div class="eyes">
// 			<div class="eye"></div>
// 			<div class="eye"></div>
// 		</div>
		
// 		<div class="beard"></div>
// 		<div class="stash"></div>
// 		<div class="mouth"></div>
// 		<div class="nose"></div>
// 	</div>
// 	<div class="torso">
// 		<div class="shirt"></div>
// 		<div class="buttons"></div>
// 		<div class="chest"></div>
// 		<div class="collar">
// 			<div class="left"></div>
// 			<div class="right"></div>
// 		</div>
// 	</div>
// 	<div class="legs">
// 		<div class="leg left">
// 			<div class="upper-leg"></div>
// 			<div class="lower-leg">
// 				<div class="shoe"></div>
// 			</div>
			
// 		</div>
// 		<div class="leg right">
// 			<div class="upper-leg"></div>
// 			<div class="lower-leg">
// 				<div class="shoe"></div>
// 			</div>
// 		</div>
// 		<div class="belt">
// 			<div class="buckle"></div>
// 		</div>
// 	</div>
// 	<div class="arm left">
// 		<div class="upper-arm"></div>
// 		<div class="lower-arm">
// 			<div class="hand left-hand">
// 				<div class="paint-brush"><div class="brush"></div></div>
// 				<div class="thumb"></div>
// 			</div>
// 		</div>
		
// 	</div>
// 	<div class="arm right">
// 		<div class="upper-arm"></div>
// 		<div class="lower-arm">
// 			<div class="hand right-hand">
// 				<div class="paints">
// 					<div class="paint"></div>
// 					<div class="paint"></div>
// 					<div class="paint"></div>
// 				</div>
// 				<div class="thumb"></div>
// 			</div>
// 		</div>
		
// 	</div>
// 	<div class="shadow"></div>
// </div>

// <div class="paint-splashes">
// 	<div class="drip left"></div>
// 	<div class="drip left"></div>
// 	<div class="drip left"></div>
// </div>
// <div class="paint-splashes">
// 	<div class="drip right"></div>
// 	<div class="drip right"></div>
// 	<div class="drip right"></div>
// </div>`;

//     document.body.appendChild(loader);

//     // Simulate page load completion after 3 seconds
//     setTimeout(() => {
//         loader.style.transform = 'translateX(100%)';
//         setTimeout(() => {
//             loader.style.display = 'none';
//         }, 1000); // Wait for the transition to complete before hiding
//     }, 3000);
// });
