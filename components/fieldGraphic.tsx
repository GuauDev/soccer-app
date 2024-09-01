export const FieldGraphic = ({
	lineup,
}: { lineup: { name: string; position: string; number: number }[][] }) => {
	return (
		<svg
			viewBox="0 0 100 130"
			className=" max-w-md mx-auto w-[300px] h-[390px]"
		>
			<title>Field</title>
			<rect y="0" x="0" height="130" width="100" fill="#4CAF50" />
			<rect
				x="5"
				y="5"
				height="120"
				width="90"
				fill="none"
				stroke="white"
				strokeWidth="0.5"
			/>
			<circle
				cy="65"
				cx="50"
				r="9.15"
				fill="none"
				stroke="white"
				strokeWidth="0.5"
			/>
			<circle cy="65" cx="50" r="0.60" fill="white" />

			<line
				y1="65"
				y2="65"
				x1="5"
				x2="95"
				fill="none"
				stroke="white"
				strokeWidth="0.5"
			/>

			{/*penalti */}
			<circle cy="16" cx="50" r="0.60" fill="white" />
			<circle cy="114" cx="50" r="0.60" fill="white" />

			{/* corner flags */}
			<defs>
				<clipPath id="first-corner">
					<rect x="5" y="5" width="5" height="5" />
				</clipPath>
			</defs>
			<circle
				cx="5"
				cy="5"
				r="1"
				fill="none"
				stroke="white"
				strokeWidth="0.5"
				clipPath="url(#first-corner)"
			/>
			<defs>
				<clipPath id="second-corner">
					<rect x="5" y="120" width="5" height="5" />
				</clipPath>
			</defs>
			<circle
				cx="5"
				cy="125"
				r="1"
				fill="none"
				stroke="white"
				strokeWidth="0.5"
				clipPath="url(#second-corner)"
			/>
			<defs>
				<clipPath id="third-corner">
					<rect x="90" y="5" width="5" height="5" />
				</clipPath>
			</defs>
			<circle
				cx="95"
				cy="5"
				r="1"
				fill="none"
				stroke="white"
				strokeWidth="0.5"
				clipPath="url(#third-corner)"
			/>
			<defs>
				<clipPath id="fourth-corner">
					<rect x="90" y="120" width="5" height="5" />
				</clipPath>
			</defs>
			<circle
				cx="95"
				cy="125"
				r="1"
				fill="none"
				stroke="white"
				strokeWidth="0.5"
				clipPath="url(#fourth-corner)"
			/>

			{/*Big box*/}
			<rect
				y="5"
				x="29.84"
				height="16.50"
				width="40.32"
				fill="none"
				stroke="white"
				strokeWidth="0.5"
			/>
			<rect
				y="108.50"
				x="29.84"
				height="16.50"
				width="40.32"
				fill="none"
				stroke="white"
				strokeWidth="0.5"
			/>
			{/*small box*/}
			<rect
				y="5"
				x="40.84"
				height="5.50"
				width="18.32"
				fill="none"
				stroke="white"
				strokeWidth="0.5"
			/>
			<rect
				y="119.5"
				x="40.84"
				height="5.50"
				width="18.32"
				fill="none"
				stroke="white"
				strokeWidth="0.5"
			/>
			{/*Penalti circle*/}
			<defs>
				<clipPath id="first-half-circle">
					<rect x="0" y="21.50" width="100" height="9.15" />
				</clipPath>
			</defs>
			<circle
				cx="50"
				cy="16"
				r="9.15"
				fill="none"
				stroke="white"
				strokeWidth="0.5"
				clipPath="url(#first-half-circle)"
			/>

			<defs>
				<clipPath id="second-half-circle">
					<rect x="0" y="104.5" width="100" height="4" />
				</clipPath>
			</defs>
			<circle
				cx="50"
				cy="114"
				r="9.15"
				fill="none"
				stroke="white"
				strokeWidth="0.5"
				clipPath="url(#second-half-circle)"
			/>
			{/*Some lines*/}
			<line
				x1="4"
				x2="5"
				y1="14.15"
				y2="14.15"
				fill="none"
				stroke="white"
				strokeWidth="0.5"
			/>
			<line
				x1="4"
				x2="5"
				y1="115.85"
				y2="115.85"
				fill="none"
				stroke="white"
				strokeWidth="0.5"
			/>
			<line
				y1="4"
				y2="5"
				x1="14.15"
				x2="14.15"
				fill="none"
				stroke="white"
				strokeWidth="0.5"
			/>
			<line
				y1="4"
				y2="5"
				x1="85.85"
				x2="85.85"
				fill="none"
				stroke="white"
				strokeWidth="0.5"
			/>
			<line
				x1="95"
				x2="96"
				y1="14.15"
				y2="14.15"
				fill="none"
				stroke="white"
				strokeWidth="0.5"
			/>
			<line
				x1="95"
				x2="96"
				y1="115.85"
				y2="115.85"
				fill="none"
				stroke="white"
				strokeWidth="0.5"
			/>

			<line
				y1="125"
				y2="126"
				x1="14.15"
				x2="14.15"
				fill="none"
				stroke="white"
				strokeWidth="0.5"
			/>
			<line
				y1="125"
				y2="126"
				x1="85.85"
				x2="85.85"
				fill="none"
				stroke="white"
				strokeWidth="0.5"
			/>
			{lineup.map(
				(
					line: { name: string; position: string; number: number }[],
					lineNumber: number,
				) => {
					return line.map((player, playerNumber) => {
						const position = {
							x: (100 / (line.length + 1)) * (playerNumber + 1),
							y: (130 / (lineup.length + 1)) * lineNumber + 15,
						};
						return (
							<g key={crypto.randomUUID()}>
								<circle cx={position.x} cy={position.y} r="4" fill="white" />
								<text
									x={position.x}
									y={position.y + 8}
									fontSize="3"
									fill="white"
									textAnchor="middle"
									fontWeight={900}
								>
									{player.name}
								</text>
								<text
									x={position.x}
									y={position.y + 1.5}
									fontSize="4"
									fill="black"
									fontWeight={600}
									textAnchor="middle"
								>
									{player.number}
								</text>
							</g>
						);
					});
				},
			)}
		</svg>
	);
};
