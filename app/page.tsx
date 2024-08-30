import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CircleDot, Timer, CheckCircle } from "lucide-react";
import { Team } from "@/components/team";

// Mock data for soccer matches
const matches = [
	{
		id: 1,
		homeTeam: "Manchester United",
		awayTeam: "Liverpool",
		homeScore: 2,
		awayScore: 1,
		status: "live", // live | upcoming | finished
		homePlayers: {
			lineup: [
				[{ name: "De Gea", position: "GK", number: 1 }],
				[
					{ name: "Wan-Bissaka", position: "RB", number: 29 },
					{ name: "Maguire", position: "CB", number: 5 },
					{ name: "Varane", position: "CB", number: 19 },
					{ name: "Shaw", position: "LB", number: 23 },
				],
				[
					{ name: "Fred", position: "CM", number: 17 },
					{ name: "McTominay", position: "CM", number: 39 },
					{ name: "Fernandes", position: "CAM", number: 18 },
				],
				[
					{ name: "Rashford", position: "LW", number: 10 },
					{ name: "Sancho", position: "RW", number: 25 },
				],
				[{ name: "Ronaldo", position: "ST", number: 7 }],
			],
			substitutes: [
				{ name: "Henderson", number: 26 },
				{ name: "Lindelöf", number: 2 },
				{ name: "Bailly", number: 3 },
				{ name: "Dalot", number: 20 },
				{ name: "Matic", number: 31 },
				{ name: "Pogba", number: 6 },
				{ name: "Lingard", number: 14 },
			],
		},
		awayPlayers: {
			lineup: [
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
			],
		},
	},
	{
		id: 2,
		homeTeam: "Chelsea",
		awayTeam: "Arsenal",
		homeScore: 1,
		awayScore: 1,
		status: "live",
		homePlayers: {
			lineup: [
				[{ name: "Kepa", position: "GK", number: 1 }],
				[
					{ name: "James", position: "RB", number: 24 },
					{ name: "Silva", position: "CB", number: 6 },
					{ name: "Colwill", position: "CB", number: 26 },
					{ name: "Cucurella", position: "LB", number: 32 },
				],
				[
					{ name: "Gallagher", position: "CM", number: 23 },
					{ name: "Fernández", position: "CM", number: 8 },
					{ name: "Caicedo", position: "CDM", number: 25 },
				],
				[
					{ name: "Sterling", position: "RW", number: 7 },
					{ name: "Mudryk", position: "LW", number: 10 },
				],
				[{ name: "Jackson", position: "ST", number: 15 }],
			],
			substitutes: [
				{ name: "Sánchez", number: 13 },
				{ name: "Chalobah", number: 14 },
				{ name: "Ugochukwu", number: 16 },
				{ name: "Maatsen", number: 29 },
				{ name: "Madueke", number: 31 },
				{ name: "Broja", number: 18 },
				{ name: "Palmer", number: 20 },
			],
		},
		awayPlayers: {
			lineup: [
				[{ name: "Ramsdale", position: "GK", number: 1 }],
				[
					{ name: "White", position: "RB", number: 4 },
					{ name: "Saliba", position: "CB", number: 12 },
					{ name: "Gabriel", position: "CB", number: 6 },
					{ name: "Zinchenko", position: "LB", number: 35 },
				],
				[
					{ name: "Rice", position: "CM", number: 41 },
					{ name: "Ødegaard", position: "CAM", number: 8 },
					{ name: "Havertz", position: "CM", number: 29 },
				],
				[
					{ name: "Saka", position: "RW", number: 7 },
					{ name: "Jesus", position: "ST", number: 9 },
					{ name: "Martinelli", position: "LW", number: 11 },
				],
			],
			substitutes: [
				{ name: "Turner", number: 30 },
				{ name: "Holding", number: 16 },
				{ name: "Kiwior", number: 15 },
				{ name: "Partey", number: 5 },
				{ name: "Vieira", number: 21 },
				{ name: "Trossard", number: 19 },
				{ name: "Smith Rowe", number: 10 },
			],
		},
	},
	{
		id: 3,
		homeTeam: "Barcelona",
		awayTeam: "Real Madrid",
		homeScore: 3,
		awayScore: 2,
		status: "finished",
		homePlayers: {
			lineup: [
				[{ name: "Ter Stegen", position: "GK", number: 1 }],
				[
					{ name: "Koundé", position: "RB", number: 23 },
					{ name: "Araujo", position: "CB", number: 4 },
					{ name: "Christensen", position: "CB", number: 15 },
					{ name: "Balde", position: "LB", number: 28 },
				],
				[
					{ name: "De Jong", position: "CM", number: 21 },
					{ name: "Pedri", position: "CM", number: 8 },
					{ name: "Gündoğan", position: "CAM", number: 16 },
				],
				[
					{ name: "Raphinha", position: "RW", number: 11 },
					{ name: "Gavi", position: "LW", number: 30 },
				],
				[{ name: "Lewandowski", position: "ST", number: 9 }],
			],
			substitutes: [
				{ name: "Iñaki Peña", number: 13 },
				{ name: "Sergi Roberto", number: 20 },
				{ name: "Fati", number: 10 },
				{ name: "Kessie", number: 19 },
				{ name: "Romeu", number: 5 },
				{ name: "Ferran Torres", number: 7 },
				{ name: "Marcos Alonso", number: 17 },
			],
		},
		awayPlayers: {
			lineup: [
				[{ name: "Courtois", position: "GK", number: 1 }],
				[
					{ name: "Carvajal", position: "RB", number: 2 },
					{ name: "Rüdiger", position: "CB", number: 22 },
					{ name: "Alaba", position: "CB", number: 4 },
					{ name: "Mendy", position: "LB", number: 23 },
				],
				[
					{ name: "Camavinga", position: "CM", number: 25 },
					{ name: "Modric", position: "CM", number: 10 },
					{ name: "Valverde", position: "CAM", number: 15 },
				],
				[
					{ name: "Rodrygo", position: "RW", number: 21 },
					{ name: "Vinicius Jr", position: "LW", number: 7 },
					{ name: "Joselu", position: "ST", number: 9 },
				],
			],
			substitutes: [
				{ name: "Lunin", number: 13 },
				{ name: "Nacho", number: 6 },
				{ name: "Tchouaméni", number: 18 },
				{ name: "Brahim Díaz", number: 21 },
				{ name: "Ceballos", number: 19 },
				{ name: "Fran García", number: 3 },
				{ name: "Güler", number: 7 },
			],
		},
	},
	{
		id: 4,
		homeTeam: "Paris Saint-Germain",
		awayTeam: "Bayern Munich",

		status: "upcoming",
		homePlayers: {
			lineup: [
				[{ name: "Donnarumma", position: "GK", number: 99 }],
				[
					{ name: "Hakimi", position: "RB", number: 2 },
					{ name: "Marquinhos", position: "CB", number: 5 },
					{ name: "Skriniar", position: "CB", number: 37 },
					{ name: "Nuno Mendes", position: "LB", number: 25 },
				],
				[
					{ name: "Ugarte", position: "CDM", number: 6 },
					{ name: "Vitinha", position: "CM", number: 17 },
					{ name: "Zaïre-Emery", position: "CM", number: 33 },
				],
				[
					{ name: "Mbappé", position: "LW", number: 7 },
					{ name: "Dembélé", position: "RW", number: 10 },
				],
				[{ name: "Gonçalo Ramos", position: "ST", number: 9 }],
			],
			substitutes: [
				{ name: "Navas", number: 1 },
				{ name: "Danilo Pereira", number: 15 },
				{ name: "Bernat", number: 14 },
				{ name: "Kang-in Lee", number: 18 },
				{ name: "Ekitike", number: 44 },
				{ name: "Fabian Ruiz", number: 8 },
				{ name: "Soler", number: 28 },
			],
		},
		awayPlayers: {
			lineup: [
				[{ name: "Neuer", position: "GK", number: 1 }],
				[
					{ name: "Pavard", position: "RB", number: 5 },
					{ name: "Upamecano", position: "CB", number: 2 },
					{ name: "De Ligt", position: "CB", number: 4 },
					{ name: "Davies", position: "LB", number: 19 },
				],
				[
					{ name: "Kimmich", position: "CDM", number: 6 },
					{ name: "Goretzka", position: "CM", number: 8 },
					{ name: "Müller", position: "CAM", number: 25 },
				],
				[
					{ name: "Sané", position: "RW", number: 10 },
					{ name: "Coman", position: "LW", number: 11 },
				],
				[{ name: "Kane", position: "ST", number: 9 }],
			],
			substitutes: [
				{ name: "Ulreich", number: 26 },
				{ name: "Mazraoui", number: 40 },
				{ name: "Musiala", number: 42 },
				{ name: "Tel", number: 39 },
				{ name: "Gravenberch", number: 38 },
				{ name: "Choupo-Moting", number: 13 },
				{ name: "Laimer", number: 27 },
			],
		},
	},
	{
		id: 5,
		homeTeam: "Juventus",
		awayTeam: "Inter Milan",
		homeScore: 2,
		awayScore: 2,
		status: "finished",
		homePlayers: {
			lineup: [
				[{ name: "Szczesny", position: "GK", number: 1 }],
				[
					{ name: "Danilo", position: "RB", number: 6 },
					{ name: "Bremer", position: "CB", number: 3 },
					{ name: "Bonucci", position: "CB", number: 19 },
					{ name: "Sandro", position: "LB", number: 12 },
				],
				[
					{ name: "Locatelli", position: "CDM", number: 27 },
					{ name: "Rabiot", position: "CM", number: 25 },
					{ name: "Fagioli", position: "CM", number: 44 },
				],
				[
					{ name: "Chiesa", position: "RW", number: 7 },
					{ name: "Kostic", position: "LW", number: 17 },
				],
				[{ name: "Vlahović", position: "ST", number: 9 }],
			],
			substitutes: [
				{ name: "Perin", number: 36 },
				{ name: "Cuadrado", number: 11 },
				{ name: "Paredes", number: 32 },
				{ name: "Di Maria", number: 22 },
				{ name: "Milik", number: 14 },
				{ name: "Kean", number: 18 },
				{ name: "Gatti", number: 15 },
			],
		},
		awayPlayers: {
			lineup: [
				[{ name: "Onana", position: "GK", number: 24 }],
				[
					{ name: "Dumfries", position: "RWB", number: 2 },
					{ name: "Škriniar", position: "CB", number: 37 },
					{ name: "Acerbi", position: "CB", number: 15 },
					{ name: "Bastoni", position: "CB", number: 95 },
					{ name: "Dimarco", position: "LWB", number: 32 },
				],
				[
					{ name: "Barella", position: "CM", number: 23 },
					{ name: "Brozović", position: "CDM", number: 77 },
					{ name: "Çalhanoğlu", position: "CM", number: 20 },
				],
				[
					{ name: "Lukaku", position: "ST", number: 9 },
					{ name: "Lautaro", position: "ST", number: 10 },
				],
			],
			substitutes: [
				{ name: "Handanović", number: 1 },
				{ name: "Darmian", number: 36 },
				{ name: "Asllani", number: 14 },
				{ name: "Gagliardini", number: 5 },
				{ name: "Correa", number: 11 },
				{ name: "Gosens", number: 8 },
				{ name: "Mkhitaryan", number: 22 },
			],
		},
	},
	{
		id: 6,
		homeTeam: "Manchester City",
		awayTeam: "Tottenham Hotspur",
		homeScore: 4,
		awayScore: 1,
		status: "live",
		homePlayers: {
			lineup: [
				[{ name: "Ederson", position: "GK", number: 31 }],
				[
					{ name: "Walker", position: "RB", number: 2 },
					{ name: "Dias", position: "CB", number: 3 },
					{ name: "Akanji", position: "CB", number: 25 },
					{ name: "Gvardiol", position: "LB", number: 24 },
				],
				[
					{ name: "Rodri", position: "CDM", number: 16 },
					{ name: "Foden", position: "CM", number: 47 },
					{ name: "De Bruyne", position: "CAM", number: 17 },
				],
				[
					{ name: "Bernardo Silva", position: "RW", number: 20 },
					{ name: "Grealish", position: "LW", number: 10 },
				],
				[{ name: "Haaland", position: "ST", number: 9 }],
			],
			substitutes: [
				{ name: "Ortega", number: 18 },
				{ name: "Laporte", number: 14 },
				{ name: "Lewis", number: 82 },
				{ name: "Phillips", number: 4 },
				{ name: "Alvarez", number: 19 },
				{ name: "Palmer", number: 80 },
				{ name: "Mahrez", number: 26 },
			],
		},
		awayPlayers: {
			lineup: [
				[{ name: "Vicario", position: "GK", number: 13 }],
				[
					{ name: "Porro", position: "RWB", number: 23 },
					{ name: "Romero", position: "CB", number: 17 },
					{ name: "Van de Ven", position: "CB", number: 37 },
					{ name: "Udogie", position: "LWB", number: 38 },
				],
				[
					{ name: "Bissouma", position: "CDM", number: 8 },
					{ name: "Maddison", position: "CM", number: 14 },
					{ name: "Højbjerg", position: "CM", number: 5 },
				],
				[
					{ name: "Kulusevski", position: "RW", number: 21 },
					{ name: "Richarlison", position: "ST", number: 9 },
					{ name: "Son", position: "LW", number: 7 },
				],
			],
			substitutes: [
				{ name: "Forster", number: 20 },
				{ name: "Davies", number: 33 },
				{ name: "Emerson", number: 12 },
				{ name: "Lo Celso", number: 18 },
				{ name: "Sarr", number: 29 },
				{ name: "Solomon", number: 27 },
				{ name: "Brennan Johnson", number: 40 },
			],
		},
	},
	{
		id: 7,
		homeTeam: "Real Madrid",
		awayTeam: "Atletico Madrid",
		homeScore: 3,
		awayScore: 0,
		status: "live",
		homePlayers: {
			lineup: [
				[{ name: "Courtois", position: "GK", number: 1 }],
				[
					{ name: "Carvajal", position: "RB", number: 2 },
					{ name: "Militão", position: "CB", number: 3 },
					{ name: "Rüdiger", position: "CB", number: 22 },
					{ name: "Mendy", position: "LB", number: 23 },
				],
				[
					{ name: "Modrić", position: "CM", number: 10 },
					{ name: "Tchouaméni", position: "CM", number: 18 },
					{ name: "Kroos", position: "CM", number: 8 },
					{ name: "Valverde", position: "CM", number: 15 },
				],
				[
					{ name: "Benzema", position: "ST", number: 9 },
					{ name: "Vinícius Jr.", position: "ST", number: 20 },
				],
			],
			substitutes: [
				{ name: "Lunin", number: 13 },
				{ name: "Alaba", number: 4 },
				{ name: "Camavinga", number: 12 },
				{ name: "Rodrygo", number: 21 },
				{ name: "Asensio", number: 11 },
				{ name: "Hazard", number: 7 },
				{ name: "Ceballos", number: 19 },
			],
		},
		awayPlayers: {
			lineup: [
				[{ name: "Oblak", position: "GK", number: 13 }],
				[
					{ name: "Molina", position: "RB", number: 16 },
					{ name: "Savic", position: "CB", number: 15 },
					{ name: "Hermoso", position: "CB", number: 22 },
					{ name: "Reinildo", position: "LB", number: 23 },
				],
				[
					{ name: "Llorente", position: "RM", number: 14 },
					{ name: "De Paul", position: "CM", number: 5 },
					{ name: "Koke", position: "CM", number: 6 },
					{ name: "Carrasco", position: "LM", number: 21 },
				],
				[
					{ name: "Griezmann", position: "ST", number: 8 },
					{ name: "Morata", position: "ST", number: 9 },
				],
			],
			substitutes: [
				{ name: "Grbic", number: 1 },
				{ name: "Giménez", number: 2 },
				{ name: "Correa", number: 10 },
				{ name: "Saúl", number: 17 },
				{ name: "Cunha", number: 19 },
				{ name: "Félix", number: 7 },
				{ name: "Barrios", number: 24 },
			],
		},
	},
	{
		id: 8,
		homeTeam: "Chelsea",
		awayTeam: "Arsenal",
		homeScore: 1,
		awayScore: 2,
		status: "finished",
		homePlayers: {
			lineup: [
				[{ name: "Kepa", position: "GK", number: 1 }],
				[
					{ name: "James", position: "RB", number: 24 },
					{ name: "Thiago Silva", position: "CB", number: 6 },
					{ name: "Cucurella", position: "CB", number: 32 },
					{ name: "Chilwell", position: "LB", number: 21 },
				],
				[
					{ name: "Enzo Fernández", position: "CDM", number: 8 },
					{ name: "Caicedo", position: "CDM", number: 25 },
				],
				[
					{ name: "Sterling", position: "RW", number: 17 },
					{ name: "Gallagher", position: "CAM", number: 23 },
					{ name: "Mudryk", position: "LW", number: 10 },
				],
				[{ name: "Jackson", position: "ST", number: 15 }],
			],
			substitutes: [
				{ name: "Sánchez", number: 28 },
				{ name: "Colwill", number: 26 },
				{ name: "Maatsen", number: 29 },
				{ name: "Chukwuemeka", number: 30 },
				{ name: "Broja", number: 18 },
				{ name: "Palmer", number: 20 },
				{ name: "Gusto", number: 27 },
			],
		},
		awayPlayers: {
			lineup: [
				[{ name: "Ramsdale", position: "GK", number: 1 }],
				[
					{ name: "White", position: "RB", number: 4 },
					{ name: "Saliba", position: "CB", number: 12 },
					{ name: "Gabriel", position: "CB", number: 6 },
					{ name: "Zinchenko", position: "LB", number: 35 },
				],
				[
					{ name: "Rice", position: "CDM", number: 41 },
					{ name: "Ødegaard", position: "CAM", number: 8 },
				],
				[
					{ name: "Saka", position: "RW", number: 7 },
					{ name: "Smith Rowe", position: "CAM", number: 10 },
					{ name: "Martinelli", position: "LW", number: 11 },
				],
				[{ name: "Jesus", position: "ST", number: 9 }],
			],
			substitutes: [
				{ name: "Turner", number: 30 },
				{ name: "Tomiyasu", number: 18 },
				{ name: "Trossard", number: 19 },
				{ name: "Jorginho", number: 20 },
				{ name: "Vieira", number: 21 },
				{ name: "Nketiah", number: 14 },
				{ name: "Kiwior", number: 15 },
			],
		},
	},
	{
		id: 9,
		homeTeam: "Barcelona",
		awayTeam: "Sevilla",
		homeScore: 2,
		awayScore: 2,
		status: "finished",
		homePlayers: {
			lineup: [
				[{ name: "Ter Stegen", position: "GK", number: 1 }],
				[
					{ name: "Koundé", position: "CB", number: 23 },
					{ name: "Christensen", position: "CB", number: 15 },
					{ name: "Araújo", position: "CB", number: 4 },
				],
				[
					{ name: "Pedri", position: "RM", number: 8 },
					{ name: "Gavi", position: "CM", number: 6 },
					{ name: "De Jong", position: "CM", number: 21 },
					{ name: "Balde", position: "LM", number: 28 },
				],
				[
					{ name: "Raphinha", position: "RW", number: 11 },
					{ name: "Lewandowski", position: "ST", number: 9 },
					{ name: "Dembélé", position: "LW", number: 7 },
				],
			],
			substitutes: [
				{ name: "Iñaki Peña", number: 13 },
				{ name: "Alonso", number: 17 },
				{ name: "Busquets", number: 5 },
				{ name: "Ferran Torres", number: 19 },
				{ name: "Fati", number: 10 },
				{ name: "Kessié", number: 22 },
				{ name: "Eric García", number: 24 },
			],
		},
		awayPlayers: {
			lineup: [
				[{ name: "Bono", position: "GK", number: 13 }],
				[
					{ name: "Navas", position: "RB", number: 16 },
					{ name: "Badé", position: "CB", number: 22 },
					{ name: "Gudelj", position: "CB", number: 6 },
					{ name: "Acuña", position: "LB", number: 19 },
				],
				[
					{ name: "Fernando", position: "CDM", number: 25 },
					{ name: "Rakitic", position: "CM", number: 10 },
					{ name: "Jordan", position: "CM", number: 8 },
					{ name: "Suso", position: "RM", number: 7 },
				],
				[
					{ name: "Lamela", position: "RW", number: 17 },
					{ name: "En-Nesyri", position: "ST", number: 15 },
					{ name: "Ocampos", position: "LW", number: 5 },
				],
			],
			substitutes: [
				{ name: "Dmitrovic", number: 1 },
				{ name: "Montiel", number: 2 },
				{ name: "Rekik", number: 4 },
				{ name: "Oliver Torres", number: 21 },
				{ name: "Papu Gómez", number: 24 },
				{ name: "Mir", number: 12 },
				{ name: "Rafa Mir", number: 9 },
			],
		},
	},
	{
		id: 10,
		homeTeam: "Bayern Munich",
		awayTeam: "Borussia Dortmund",
		homeScore: 4,
		awayScore: 2,
		status: "finished",
		homePlayers: {
			lineup: [
				[{ name: "Neuer", position: "GK", number: 1 }],
				[
					{ name: "Pavard", position: "RB", number: 5 },
					{ name: "Upamecano", position: "CB", number: 2 },
					{ name: "De Ligt", position: "CB", number: 4 },
					{ name: "Davies", position: "LB", number: 19 },
				],
				[
					{ name: "Kimmich", position: "CDM", number: 6 },
					{ name: "Goretzka", position: "CM", number: 8 },
					{ name: "Müller", position: "CAM", number: 25 },
				],
				[
					{ name: "Sané", position: "RW", number: 10 },
					{ name: "Mane", position: "LW", number: 17 },
					{ name: "Choupo-Moting", position: "ST", number: 13 },
				],
			],
			substitutes: [
				{ name: "Ulreich", number: 26 },
				{ name: "Hernandez", number: 21 },
				{ name: "Musiala", number: 42 },
				{ name: "Gravenberch", number: 38 },
				{ name: "Coman", number: 11 },
				{ name: "Tel", number: 39 },
				{ name: "Mazraoui", number: 40 },
			],
		},
		awayPlayers: {
			lineup: [
				[{ name: "Kobel", position: "GK", number: 1 }],
				[
					{ name: "Meunier", position: "RB", number: 24 },
					{ name: "Süle", position: "CB", number: 25 },
					{ name: "Schlotterbeck", position: "CB", number: 4 },
					{ name: "Guerreiro", position: "LB", number: 13 },
				],
				[
					{ name: "Can", position: "CDM", number: 23 },
					{ name: "Bellingham", position: "CM", number: 22 },
					{ name: "Brandt", position: "CM", number: 19 },
				],
				[
					{ name: "Reus", position: "RW", number: 11 },
					{ name: "Adeyemi", position: "LW", number: 27 },
					{ name: "Haller", position: "ST", number: 9 },
				],
			],
			substitutes: [
				{ name: "Meyer", number: 35 },
				{ name: "Malen", number: 21 },
				{ name: "Hummels", number: 15 },
				{ name: "Gittens", number: 32 },
				{ name: "Wolf", number: 17 },
				{ name: "Dahoud", number: 8 },
				{ name: "Reyna", number: 7 },
			],
		},
	},
	{
		id: 14,
		homeTeam: "Argentina",
		awayTeam: "Colombia",
		homeScore: 2,
		awayScore: 1,
		status: "finished",
		homePlayers: {
			lineup: [
				[{ name: "D. Martínez", position: "GK", number: 23 }],
				[
					{ name: "G. Montiel", position: "RB", number: 4 },
					{ name: "C. Romero", position: "CB", number: 13 },
					{ name: "L. Martínez", position: "CB", number: 25 },
					{ name: "N. Tagliafico", position: "LB", number: 3 },
				],
				[
					{ name: "A. Di María", position: "RW", number: 11 },
					{ name: "R. De Paul", position: "CM", number: 7 },
					{ name: "E. Fernández", position: "CM", number: 24 },
					{ name: "A. Mac Allister", position: "CM", number: 20 },
				],
				[
					{ name: "L. Messi", position: "CF", number: 10 },
					{ name: "J. Álvarez", position: "LW", number: 9 },
				],
			],
			substitutes: [
				{ name: "L. Paredes", number: 5 },
				{ name: "N. González", number: 15 },
				{ name: "G. Lo Celso", number: 16 },
				{ name: "L. Martínez", number: 22 },
				{ name: "N. Molina", number: 26 },
				{ name: "F. Armani", number: 1 },
				{ name: "L. Martínez Quarta", number: 2 },
				{ name: "G. Pezzella", number: 6 },
				{ name: "M. Acuña", number: 8 },
				{ name: "G. Rulli", number: 12 },
				{ name: "E. Palacios", number: 14 },
				{ name: "A. Garnacho", number: 17 },
				{ name: "G. Rodríguez", number: 18 },
				{ name: "V. Carboni", number: 21 },
			],
		},
		awayPlayers: {
			lineup: [
				[{ name: "C. Vargas", position: "GK", number: 12 }],
				[
					{ name: "S. Arias", position: "RB", number: 4 },
					{ name: "D. Sánchez", position: "CB", number: 23 },
					{ name: "C. Cuesta", position: "CB", number: 2 },
					{ name: "J. Mojica", position: "LB", number: 17 },
				],
				[
					{ name: "R. Ríos", position: "CM", number: 6 },
					{ name: "J. Lerma", position: "CM", number: 16 },
					{ name: "J. Arias", position: "RM", number: 11 },
				],
				[
					{ name: "J. Rodríguez", position: "ST", number: 10 },
					{ name: "J. Córdoba", position: "ST", number: 24 },
					{ name: "L. Díaz", position: "LM", number: 7 },
				],
			],
			substitutes: [
				{ name: "K. Castaño", number: 5 },
				{ name: "J. Carrascal", number: 8 },
				{ name: "M. Borja", number: 9 },
				{ name: "M. Uribe", number: 15 },
				{ name: "R. Santos Borré", number: 19 },
				{ name: "J. F. Quintero", number: 20 },
				{ name: "D. Ospina", number: 1 },
				{ name: "J. Janer Lucumí", number: 3 },
				{ name: "Y. Mina", number: 13 },
				{ name: "J. Durán", number: 14 },
				{ name: "L. Sinisterra", number: 18 },
				{ name: "Y. Asprilla", number: 22 },
				{ name: "Á. Montero", number: 25 },
				{ name: "D. Machado", number: 26 },
			],
		},
	},
];

export default function Component() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 p-4 sm:p-6 md:p-8">
			<div className="max-w-7xl mx-auto">
				<h1 className="text-3xl font-bold mb-6 text-blue-900 text-center">
					Soccer Matches
				</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
					{matches.map((match) => (
						<Dialog key={match.id}>
							<DialogTrigger asChild>
								<Card className="overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer">
									<CardContent className="p-4">
										<div className="flex justify-between items-center mb-2">
											<Badge
												variant={
													match.status === "live"
														? "destructive"
														: match.status === "upcoming"
															? "secondary"
															: "default"
												}
												className={`${match.status === "finished" ? "bg-green-500" : ""} px-2 py-1 text-xs font-semibold`}
											>
												{match.status === "Live" ? (
													<CircleDot className="w-3 h-3 mr-1 animate-pulse" />
												) : match.status === "Upcoming" ? (
													<Timer className="w-3 h-3 mr-1" />
												) : (
													<CheckCircle className="w-3 h-3 mr-1" />
												)}
												{match.status}
											</Badge>
											{match.status !== "Upcoming" && (
												<span className="text-xl font-bold text-blue-600">
													{match.homeScore} - {match.awayScore}
												</span>
											)}
										</div>
										<div className="flex flex-col items-center text-gray-800">
											<span className="text-sm font-semibold text-center">
												{match.homeTeam}
											</span>
											<span className="text-xs font-medium text-gray-500 my-1">
												vs
											</span>
											<span className="text-sm font-semibold text-center">
												{match.awayTeam}
											</span>
										</div>
									</CardContent>
								</Card>
							</DialogTrigger>
							<DialogContent className="max-w-4xl max-h-screen overflow-auto">
								<DialogHeader>
									<DialogTitle className="text-2xl font-bold text-blue-900">
										{match.homeTeam} vs {match.awayTeam}
									</DialogTitle>
								</DialogHeader>
								<Tabs defaultValue="home" className="w-full">
									<TabsList className="grid w-full grid-cols-2 mb-4">
										<TabsTrigger value={match.homeTeam}>
											{match.homeTeam}
										</TabsTrigger>
										<TabsTrigger value={match.awayTeam}>
											{match.awayTeam}
										</TabsTrigger>
									</TabsList>
									<Team team={match.homePlayers} teamName={match.homeTeam} />
									<Team team={match.awayPlayers} teamName={match.awayTeam} />
								</Tabs>
							</DialogContent>
						</Dialog>
					))}
				</div>
			</div>
		</div>
	);
}
