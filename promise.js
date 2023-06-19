// const resolved = false

// const myPromise = new Promise((resolve, reject)=>{
//     if(resolved){
//         resolve('yahoo! resolved')
//     }else {
//         reject('oops! rejected')
//     }

// })

// console.log(myPromise)
const foods = {
	Kabob: {
		inStock: 6,
		price: 11.5,
		details: ['rice', 'salad', 'bread', 'yogurt'],
		imgUrl:
			'https://mail.google.com/mail/u/0?ui=2&ik=724174be16&attid=0.2&permmsgid=msg-a:r-8653581083228333915&th=188a3050bb666ef2&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ82t8hKwYRaWHJ97w2OVnz9gUjvPaoRePVxpipbu__3j1R_FxI7RZk77nT-8J7Cpc_7rMvZ1IMXFcPeT9E0bKbUsF1qriqSXJG4jiyazViPadqG1_76-83esFw&disp=emb&realattid=188a304e2f9b9eb4c242',
	},
	Manto: {
		inStock: 3,
		price: 7.25,
		details: [],
		imgUrl:
			'https://mail.google.com/mail/u/0?ui=2&ik=724174be16&attid=0.5&permmsgid=msg-a:r-3623624859065156509&th=188a30bf1ab93dc1&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ8sz11ntPeLeFRtFR65VV87mY8mNThQbr0nrdOKTKyzApzyAyWRmSi4Cm3Ll9Cp2drW9GhyZxl5IOckawpgW5dHe2P2UVSEon6SRVyyVBOcj2HoEhsT3cOIE3g&disp=emb&realattid=188a30be64c138fc42a1',
	},
	Kabuli: {
		inStock: 1,
		price: 16.8,
		details: ['salad', 'chilis', 'bread'],
		imgUrl:
			'https://mail.google.com/mail/u/0?ui=2&ik=724174be16&attid=0.1&permmsgid=msg-a:r-7057969838938397319&th=188a30d8e755dd92&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ-et_UYrRIem6FYojuxte5tbG_SJRYVaTBZQVnCWyLqBluHwoz5JCLd0tJ4-MyqiQ9bN16Cp9Qn847jwc-Xc7DWVr58g54KO6v4cKWKmj2byDvDQmqnWM60BM0&disp=emb&realattid=188a30d78a3377325221',
	},
	Bolani: {
		inStock: 4,
		price: 4.5,
		details: ['chutney'],
		imgUrl:
			'https://mail.google.com/mail/u/0?ui=2&ik=724174be16&attid=0.3&permmsgid=msg-a:r-8653581083228333915&th=188a3050bb666ef2&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ96WOokfIxSdRP7OS2g66vPbH-7okvRQpEbJiykPnMIfvF5dzckYmbmUDsBLz0DoJK_05zNbm2295ix6NDJxp_XgvJdodkcdjMAw-KiqQUEzOCypDxWYRhuqG8&disp=emb&realattid=188a304ff1b1e3160254',
	},
	Bamya: {
		inStock: 0,
		price: 12.0,
		details: ['chutney'],
		imgUrl:
			'https://mail.google.com/mail/u/0?ui=2&ik=724174be16&attid=0.3&permmsgid=msg-a:r6244414847018527659&th=188a30fb125ac15a&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ-iRR9PstwyYAp2f8Dm12_MjLblI5k3jV8qCu-qAXAIWTHaVvnmqpuzHpeP9SPS8uWXOwd5AE35YM43mtl3Ct7Mmyus_mw-3VBqRDuKuAGgGExXTacevR78wig&disp=emb&realattid=188a30fa01d9bb939231',
	},
	Karahi: {
		inStock: 11,
		price: 15.5,
		details: ['rice', 'bread', 'yogurt'],
		imgUrl:
			'https://mail.google.com/mail/u/0?ui=2&ik=724174be16&attid=0.4&permmsgid=msg-a:r-1734836585612011764&th=188a3095dcc39644&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ8uvAjqmA8nR6r-Vac5TuKaXNsE8ZgIyM1kHsQYie2X_nOVui12ozL_hYtyF-VdHCf3gcb2ukLcIEc9kf4G3Rh2efN6cqbQH82kEdU_NO4j-bjBnjbOKcVRvnc&disp=emb&realattid=188a30935e0af49b0292',
	},
}

const numPromise = new Promise((resolve, reject)=> {
    let num = Math.random()
    if(num > 0.5){
        resolve(foods)
    }else{
        reject('nothing in my cup')
    }
})

const success = (res) => {
    Object.keys(res).forEach(e => console.log(e) )
}

console.log(Object.keys(numPromise))

// numPromise.then(success).catch(err => console.log(err))
