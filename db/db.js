export default {
	bio: {
		about: {
			text: [
				"Hello;",
				"I'm Jake Lawson. I'm currently a senior at Cornell University majoring in Engineering Physics. Within the Engineering Physics major I was most interested in Quantum Mechanics, Mathematical Physics, and Computer Science.",
				"I have also been a member of the Varsity Swim team for my four years at Cornell. My specialty is distance freestyle and individual medley (IM), which is a combination of all four ofthe strokes. My main events are the 1650 yd Freestyle (mile), 1000 yd Freestyle, 500 yd Freestyle, and 400 yd IM.",
			],
		},
		contact: {
			text: [
				"If you would like to get in touch with me for any reason, send me an email at jel323@cornell.edu",
			],
		},
	},
	skills: [
		{
			title: "Physics",
			skillName: "Quantum Mechanics",
			color: "1",
			percentage: "75",
		},
		{
			title: "Math-Phys",
			skillName: "Mathematical Physics",
			color: "2",
			percentage: "75",
		},
		{
			title: "Physics",
			skillName: "Electricity and Magnetism",
			color: "3",
			percentage: "70",
		},
		{
			title: "Physics",
			skillName: "Mechanics and General Relativity",
			color: "4",
			percentage: "50",
		},
		{
			title: "Languages",
			skillName: "Python",
			color: "5",
			percentage: "50",
		},
		{
			title: "Languages",
			skillName: "OCaml, Java",
			color: "2",
			percentage: "30",
		},
		{
			title: "Physics",
			skillName: "Laser Safety",
			color: "10",
			percentage: "50"
		},
		{
			title: "ML",
			skillName: "Pytorch",
			color: "8",
			percentage: "30",
		},
		{
			title: "Sport",
			skillName: "Swimming",
			color: "9",
			percentage: "80",
		},
		{
			title: "Editor",
			skillName: "VS Code",
			color: "7",
			percentage: "20",
		},
	],
	research: {
		plif: {
			name: "Gas Density Measurements",
			image: "media/shot5_filt.pdf",
			desc: "Investigated consistency of gas density measurements using planar laser induced fluorescence (PLIF) and created more accurate gas density calibration method.",
			overview: "plif.html",
			tags: ["Lasers", "Python", "Optics", "Image Processing"]
		},
		fringe: {
			name: "Fringe Tracing Algorithm",
			image: "",
			desc: "Imporved algorithm to extract fringe traces from interferometry images, which are used to calculate gas and plasma densities for some experiments at LPS.",
			overview: "fringe.html",
			tags: ["Python", "Machine Learning", "PyTorch", "UNet"]
		}
	},
	projects: {
		web: [],
		software: [],
		android: [],
		freelance: [],
	},
	experience: [
		{
			title: "Cornell University Laboratory of Plasma Studies",
			duration: "October 2018 - Present",
			subtitle: "Undergraduate Research Assistant",
			details: [
				"Created more accurate calibration method for "
			],
			tags: [],
		},
	],
	education: [
		{
			title: "Bachelors in Engineering Physics",
			duration: "August 2018 - May 2022",
			subtitle: "Cornell University",
			details: [
				"Main focus of my studies was in Physics and Mathematical Physics.",
				"Also pursued Computer Science, Math, and Economics.",
			],
			tags: [
				"Quantum Mechanics",
				"Mathematical Physics",
				"Electricity and Magnetism",
				"Mechanics and General Relativity",
				"Functional Programming and Data Structures",
				"Microeconomics and Game Theory",
			],
			icon: "graduation-cap",
		},
	],
	footer: [
		{
			label: "Resources",
			data: [
				{
					text: "Enable Dark/Light Mode",
					func: "enableDarkMode()",
				},
				{
					text: "Print this page",
					func: "window.print()",
				},
				{
					text: "Origninal Template by Vinay Somawat",
					link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
				},
			],
		},
		{
			label: "Social Profiles",
			data: [
				{
					text: "Linkedin",
					link: "https://www.linkedin.com/in/jacob-lawson-19b933194/",
				},
				//{
				//	text: "Instagram",
				//	link: "https://www.instagram.com/jake__769/",
				//}
			]
		},
		{
			label: "copyright-text",
			data: [
				"Adapted from Vinay Somawat's Portfolio Website.",
				"&copy; No Copyrights. Feel free to use this template."
			],
		},
	],
};
