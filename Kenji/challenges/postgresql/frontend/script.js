const femaleNames = [
	'CHRISTINE',
	'MARY',
	'PATRICIA',
	'LINDA',
	'BARBARA',
	'ELIZABETH',
	'JENNIFER',
	'MARIA',
	'SUSAN',
	'MARGARET',
	'DOROTHY',
	'LISA',
	'NANCY',
	'KAREN',
	'BETTY',
	'HELEN',
	'SANDRA',
	'DONNA',
	'CAROL',
	'RUTH',
	'SHARON',
	'MICHELLE',
	'LAURA',
	'SARAH',
	'KIMBERLY',
	'DEBORAH',
	'JESSICA',
	'SHIRLEY',
	'CYNTHIA',
	'ANGELA',
	'MELISSA',
	'BRENDA',
	'AMY',
	'ANNA',
	'REBECCA',
	'VIRGINIA',
	'KATHLEEN',
	'PAMELA',
	'MARTHA',
	'DEBRA',
	'AMANDA',
	'STEPHANIE',
	'CAROLYN',
	'MARIE',
	'JANET',
	'CATHERINE',
	'FRANCES',
	'ANN',
	'JOYCE',
	'DIANE',
	'ALICE',
	'JULIE',
	'HEATHER',
	'TERESA',
	'DORIS',
	'GLORIA',
	'EVELYN',
	'JEAN',
	'CHERYL',
	'MILDRED',
	'KATHERINE',
	'JOAN',
	'ASHLEY',
	'JUDITH',
	'ROSE',
	'JANICE',
	'KELLY',
	'NICOLE',
	'JUDY',
	'CHRISTINA',
	'KATHY',
	'THERESA',
	'BEVERLY',
	'DENISE',
	'TAMMY',
	'IRENE',
	'JANE',
	'LORI',
	'RACHEL',
	'MARILYN',
	'ANDREA',
	'KATHRYN',
	'LOUISE',
	'SARA',
	'ANNE',
	'JACQUELINE',
	'WANDA',
	'BONNIE',
	'JULIA',
	'RUBY',
	'LOIS',
	'TINA',
	'PHYLLIS',
	'NORMA',
	'PAULA',
	'DIANA',
	'ANNIE',
	'LILLIAN',
	'EMILY',
	'ROBIN',
];

const maleNames = [
	'CHRISTOPHER',
	'JAMES',
	'JOHN',
	'ROBERT',
	'MICHAEL',
	'WILLIAM',
	'DAVID',
	'RICHARD',
	'CHARLES',
	'JOSEPH',
	'THOMAS',
	'DANIEL',
	'PAUL',
	'MARK',
	'DONALD',
	'GEORGE',
	'KENNETH',
	'STEVEN',
	'EDWARD',
	'BRIAN',
	'RONALD',
	'ANTHONY',
	'KEVIN',
	'JASON',
	'MATTHEW',
	'GARY',
	'TIMOTHY',
	'JOSE',
	'LARRY',
	'JEFFREY',
	'FRANK',
	'SCOTT',
	'ERIC',
	'STEPHEN',
	'ANDREW',
	'RAYMOND',
	'GREGORY',
	'JOSHUA',
	'JERRY',
	'DENNIS',
	'WALTER',
	'PATRICK',
	'PETER',
	'HAROLD',
	'DOUGLAS',
	'HENRY',
	'CARL',
	'ARTHUR',
	'RYAN',
	'ROGER',
	'JOE',
	'JUAN',
	'JACK',
	'ALBERT',
	'JONATHAN',
	'JUSTIN',
	'TERRY',
	'GERALD',
	'KEITH',
	'SAMUEL',
	'WILLIE',
	'RALPH',
	'LAWRENCE',
	'NICHOLAS',
	'ROY',
	'BENJAMIN',
	'BRUCE',
	'BRANDON',
	'ADAM',
	'HARRY',
	'FRED',
	'WAYNE',
	'BILLY',
	'STEVE',
	'LOUIS',
	'JEREMY',
	'AARON',
	'RANDY',
	'HOWARD',
	'EUGENE',
	'CARLOS',
	'RUSSELL',
	'BOBBY',
	'VICTOR',
	'MARTIN',
	'ERNEST',
	'PHILLIP',
	'TODD',
	'JESSE',
	'CRAIG',
	'ALAN',
	'SHAWN',
	'CLARENCE',
	'SEAN',
	'PHILIP',
	'CHRIS',
	'JOHNNY',
	'EARL',
	'JIMMY',
	'ANTONIO',
];

const lastNames = [
	'SMITH------',
	'JOHNSON',
	'WILLIAMS',
	'JONES',
	'BROWN',
	'DAVIS',
	'MILLER',
	'WILSON',
	'MOORE',
	'TAYLOR',
	'ANDERSON',
	'THOMAS',
	'JACKSON',
	'WHITE',
	'HARRIS',
	'MARTIN',
	'THOMPSON',
	'GARCIA',
	'MARTINEZ',
	'ROBINSON',
	'CLARK',
	'RODRIGUEZ',
	'LEWIS',
	'LEE',
	'WALKER',
	'HALL',
	'ALLEN',
	'YOUNG',
	'HERNANDEZ',
	'KING',
	'WRIGHT',
	'LOPEZ',
	'HILL',
	'SCOTT',
	'GREEN',
	'ADAMS',
	'BAKER',
	'GONZALEZ',
	'NELSON',
	'CARTER',
	'MITCHELL',
	'PEREZ',
	'ROBERTS',
	'TURNER',
	'PHILLIPS',
	'CAMPBELL',
	'PARKER',
	'EVANS',
	'EDWARDS',
	'COLLINS',
	'STEWART',
	'SANCHEZ',
	'MORRIS',
	'ROGERS',
	'REED',
	'COOK',
	'MORGAN',
	'BELL',
	'MURPHY',
	'BAILEY',
	'RIVERA',
	'COOPER',
	'RICHARDSON',
	'COX',
	'HOWARD',
	'WARD',
	'TORRES',
	'PETERSON',
	'GRAY',
	'RAMIREZ',
	'JAMES',
	'WATSON',
	'BROOKS',
	'KELLY',
	'SANDERS',
	'PRICE',
	'BENNETT',
	'WOOD',
	'BARNES',
	'ROSS',
	'HENDERSON',
	'COLEMAN',
	'JENKINS',
	'PERRY',
	'POWELL',
	'LONG',
	'PATTERSON',
	'HUGHES',
	'FLORES',
	'WASHINGTON',
	'BUTLER',
	'SIMMONS',
	'FOSTER',
	'GONZALES',
	'BRYANT',
	'ALEXANDER',
	'RUSSELL',
	'GRIFFIN',
	'DIAZ',
	'HAYES',
	'MYERS',
	'FORD',
	'HAMILTON',
	'GRAHAM',
	'SULLIVAN',
	'WALLACE',
	'WOODS',
	'COLE',
	'WEST',
	'JORDAN',
	'OWENS',
	'REYNOLDS',
	'FISHER',
	'ELLIS',
	'HARRISON',
	'GIBSON',
	'MCDONALD',
	'CRUZ',
	'MARSHALL',
	'ORTIZ',
	'GOMEZ',
	'MURRAY',
	'FREEMAN',
	'WELLS',
	'WEBB',
	'SIMPSON',
	'STEVENS',
	'TUCKER',
	'PORTER',
	'HUNTER',
	'HICKS',
	'CRAWFORD',
	'HENRY',
	'BOYD',
	'MASON',
	'MORALES',
	'KENNEDY',
	'WARREN',
	'DIXON',
	'RAMOS',
	'REYES',
	'BURNS',
	'GORDON',
	'SHAW',
	'HOLMES',
	'RICE',
	'ROBERTSON',
	'HUNT',
	'BLACK',
	'DANIELS',
	'PALMER',
	'MILLS',
	'NICHOLS',
	'GRANT',
	'KNIGHT',
	'FERGUSON',
	'ROSE',
	'STONE',
	'HAWKINS',
	'DUNN',
	'PERKINS',
	'HUDSON',
	'SPENCER',
	'GARDNER',
	'STEPHENS',
	'PAYNE',
	'PIERCE',
	'BERRY',
	'MATTHEWS',
	'ARNOLD',
	'WAGNER',
	'WILLIS',
	'RAY',
	'WATKINS',
	'OLSON',
	'CARROLL',
	'DUNCAN',
	'SNYDER',
	'HART',
	'CUNNINGHAM',
	'BRADLEY',
	'LANE',
	'ANDREWS',
	'RUIZ',
	'HARPER',
	'FOX',
	'RILEY',
	'ARMSTRONG',
	'CARPENTER',
	'WEAVER',
	'GREENE',
	'LAWRENCE',
	'ELLIOTT',
	'CHAVEZ',
	'SIMS',
	'AUSTIN',
	'PETERS',
	'KELLEY',
	'FRANKLIN',
	'LAWSON',
];

function generateCPF() {
	var n = 9,
		n1 = Math.round(Math.random() * n),
		n2 = Math.round(Math.random() * n),
		n3 = Math.round(Math.random() * n),
		n4 = Math.round(Math.random() * n),
		n5 = Math.round(Math.random() * n),
		n6 = Math.round(Math.random() * n),
		n7 = Math.round(Math.random() * n),
		n8 = Math.round(Math.random() * n),
		n9 = Math.round(Math.random() * n),
		d1 =
			n9 * 2 +
			n8 * 3 +
			n7 * 4 +
			n6 * 5 +
			n5 * 6 +
			n4 * 7 +
			n3 * 8 +
			n2 * 9 +
			n1 * 10,
		d1 = 11 - (d1 % 11),
		d1 = d1 >= 10 ? 0 : d1,
		d2 =
			d1 * 2 +
			n9 * 3 +
			n8 * 4 +
			n7 * 5 +
			n6 * 6 +
			n5 * 7 +
			n4 * 8 +
			n3 * 9 +
			n2 * 10 +
			n1 * 11,
		d2 = 11 - (d2 % 11),
		d2 = d2 >= 10 ? 0 : d2;
	return '' + n1 + n2 + n3 + +n4 + n5 + n6 + +n7 + n8 + n9 + +d1 + d2;
}

function generateRandomBirthday() {
	const year = Math.floor(Math.random() * (2000 - 1900 + 1)) + 1900;
	let month = String(Math.floor(Math.random() * (12 - 1 + 1)) + 1);
	let day = String(Math.floor(Math.random() * (31 - 1 + 1)) + 1);
	if (month.length === 1) {
		month = '0' + month;
	}
	if (day.length === 1) {
		day = '0' + day;
	}
	return `${year}-${month}-${day}`;
}

function generateRandomPerson() {
	const gender = Math.floor(Math.random() * 2);
	const hasSocialName = Math.floor(Math.random() * 2);
	let socialName = '';
	if (hasSocialName === 0) {
		let randomGender = Math.floor(Math.random() * 2);
		const socialLastName =
			lastNames[Math.floor(Math.random() * lastNames.length)];
		if (randomGender === 0) {
			const socialFirstName =
				maleNames[Math.floor(Math.random() * maleNames.length)];
			socialName = `${socialFirstName} ${socialLastName}`;
		} else {
			const socialFirstName =
				femaleNames[Math.floor(Math.random() * femaleNames.length)];
			socialName = `${socialFirstName} ${socialLastName}`;
		}
	}
	let firstName = '';
	if (gender === 0) {
		firstName = maleNames[Math.floor(Math.random() * maleNames.length)];
	} else {
		firstName = femaleNames[Math.floor(Math.random() * femaleNames.length)];
	}
	const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
	const cpf = generateCPF();
	const birthDate = generateRandomBirthday();
	return {
		nome: `${firstName} ${lastName}`,
		nome_social: socialName,
		cpf: cpf,
		data_nascimento: birthDate,
		renda_id: Math.ceil(Math.random() * 8),
		nivel_escolar_id: Math.ceil(Math.random() * 11),
	};
}

const url = 'http://localhost:8000/create';

function putUsers() {
	console.log('putUsers');
	for (let i = 0; i < 1000; i++) {
		const user = generateRandomPerson();
		console.log(user);
		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				nome: user.nome,
				nome_social: user.nome_social,
				cpf: user.cpf,
				data_nascimento: user.data_nascimento,
				renda_id: user.renda_id,
				nivel_escolar_id: user.nivel_escolar_id,
			}),
		})
			.then((response) => response.json())
			.then((data) => console.log(data))
			.catch((error) => console.error(error));
	}
}
const sendButton = document.getElementById('sendRequest');
sendButton.addEventListener('click', putUsers);