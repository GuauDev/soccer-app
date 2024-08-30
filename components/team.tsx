import { UserPlus, Users } from "lucide-react";
import { TabsContent } from "./ui/tabs";
import { ScrollArea } from "./ui/scroll-area";
import { Badge } from "./ui/badge";
import { FieldGraphic } from "./fieldGraphic";

export function Team({ team, teamName }: { team: Team; teamName: string }) {
	return (
		<TabsContent key={teamName} value={teamName}>
			<div className="grid md:grid-cols-2 gap-6">
				<div>
					<h3 className="font-bold d text-lg mb-3 flex items-center text-blue-800">
						<Users className="w-5 h-5 mr-2" />
						Lineup
					</h3>
					<ScrollArea className="h-[300px] w-full rounded-md border p-4">
						<ul className="space-y-1">
							{team.lineup.flat().map((player) => (
								<li
									key={player.number}
									className="flex items-center justify-between bg-gray-100 rounded px-3 py-2"
								>
									<span>{player.name}</span>
									<div className="flex gap-2">
										<Badge
											variant="outline"
											className="w-[35px] flex justify-center"
										>
											{player.position}
										</Badge>
										<Badge
											variant="default"
											className="w-[35px] flex justify-center"
										>
											{player.number}
										</Badge>
									</div>
								</li>
							))}
						</ul>
					</ScrollArea>
					<h3 className="font-bold text-lg mt-6 mb-3 flex items-center text-blue-800">
						<UserPlus className="w-5 h-5 mr-2" />
						Substitutes
					</h3>
					<ScrollArea className="h-[150px] w-full rounded-md border p-4">
						<ul className="space-y-1">
							{team.substitutes.map((player) => (
								<li
									key={player.number}
									className="bg-gray-100 rounded px-3 py-2 flex items-center justify-between"
								>
									{player.name}
									<Badge
										variant="default"
										className="w-[35px] flex justify-center"
									>
										{player.number}
									</Badge>
								</li>
							))}
						</ul>
					</ScrollArea>
				</div>
				<div>
					<h3 className="font-bold text-lg mb-3 text-blue-800">Formation</h3>
					<div className="bg-gray-100 rounded-lg p-4">
						<FieldGraphic lineup={team.lineup} />
					</div>
				</div>
			</div>
		</TabsContent>
	);
}

/*lineup: [
				[{ name: "Alisson", position: "GK", number: 1 }],
				[
					{ name: "Alexander-Arnold", position: "RB", number: 66 },
					{ name: "Konaté", position: "CB", number: 5 },
					{ name: "Van Dijk", position: "CB", number: 4 },
					{ name: "Robertson", position: "LB", number: 26 },
				],
				[
					{ name: "Mac Allister", position: "CM", number: 10 },
					{ name: "Szoboszlai", position: "CM", number: 8 },
					{ name: "Jones", position: "CM", number: 17 },
				],
				[
					{ name: "Salah", position: "RW", number: 11 },
					{ name: "Núñez", position: "CF", number: 9 },
					{ name: "Luis Díaz", position: "LW", number: 7 },
				],
			],
			substitutes: [
				{ name: "Kelleher", number: 62 },
				{ name: "Matip", number: 32 },
				{ name: "Tsimikas", number: 21 },
				{ name: "Endo", number: 3 },
				{ name: "Elliott", number: 19 },
				{ name: "Gakpo", number: 18 },
				{ name: "Gravenberch", number: 38 },
			], */
