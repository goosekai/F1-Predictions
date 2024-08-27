document.addEventListener("DOMContentLoaded", function () {
    fetch('/prediction')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {

            if (Array.isArray(data.bahrainDoc) && data.bahrainDoc.length > 0) {
                const bahrainContainer = document.getElementById('bahrain');

                data.bahrainDoc.forEach(element => {

                    const predictionDiv = document.createElement('div');
                    predictionDiv.innerHTML = `
                        <p><strong>Name:</strong> ${element.name}</p>
                        <p><strong>Biggest Surprise:</strong> ${element.biggestSurprise}</p>
                        <p><strong>Biggest Flop:</strong> ${element.biggestFlop}</p>
                        <p><strong>Sprint Pole:</strong> ${element.sprintPole}</p>
                        <p><strong>Sprint Winner:</strong> ${element.sprintWinner}</p>
                        <p><strong>First Place:</strong> ${element.firstPlace}</p>
                        <p><strong>Second Place:</strong> ${element.secondPlace}</p>
                        <p><strong>Third Place:</strong> ${element.thirdPlace}</p>
                        <p><strong>Crazy Prediction:</strong> ${element.crazyPrediction}</p>
                        <hr>
                    `;
                    bahrainContainer.appendChild(predictionDiv);
                });
            } else {
                document.getElementById('bahrain').textContent = 'No data available for Bahrain';
            }

            if (Array.isArray(data.jeddahDoc) && data.jeddahDoc.length > 0) {
                const jeddahContainer = document.getElementById('jeddah');

                data.jeddahDoc.forEach(element => {

                    const predictionDiv = document.createElement('div');
                    predictionDiv.innerHTML = `
                        <p><strong>Name:</strong> ${element.name}</p>
                        <p><strong>Biggest Surprise:</strong> ${element.biggestSurprise}</p>
                        <p><strong>Biggest Flop:</strong> ${element.biggestFlop}</p>
                        <p><strong>Sprint Pole:</strong> ${element.sprintPole}</p>
                        <p><strong>Sprint Winner:</strong> ${element.sprintWinner}</p>
                        <p><strong>First Place:</strong> ${element.firstPlace}</p>
                        <p><strong>Second Place:</strong> ${element.secondPlace}</p>
                        <p><strong>Third Place:</strong> ${element.thirdPlace}</p>
                        <p><strong>Crazy Prediction:</strong> ${element.crazyPrediction}</p>
                        <hr>
                    `;
                    jeddahContainer.appendChild(predictionDiv);
                });
            } else {
                document.getElementById('jeddah').textContent = 'No data available for Jeddah';
            }

            if (Array.isArray(data.australiaDoc) && data.australiaDoc.length > 0) {
                const australiaContainer = document.getElementById('australia');

                data.australiaDoc.forEach(element => {

                    const predictionDiv = document.createElement('div');
                    predictionDiv.innerHTML = `
                        <p><strong>Name:</strong> ${element.name}</p>
                        <p><strong>Biggest Surprise:</strong> ${element.biggestSurprise}</p>
                        <p><strong>Biggest Flop:</strong> ${element.biggestFlop}</p>
                        <p><strong>Sprint Pole:</strong> ${element.sprintPole}</p>
                        <p><strong>Sprint Winner:</strong> ${element.sprintWinner}</p>
                        <p><strong>First Place:</strong> ${element.firstPlace}</p>
                        <p><strong>Second Place:</strong> ${element.secondPlace}</p>
                        <p><strong>Third Place:</strong> ${element.thirdPlace}</p>
                        <p><strong>Crazy Prediction:</strong> ${element.crazyPrediction}</p>
                        <hr>
                    `;
                    australiaContainer.appendChild(predictionDiv);
                });
            } else {
                document.getElementById('australia').textContent = 'No data available for Australia';
            }

            if (Array.isArray(data.japanDoc) && data.japanDoc.length > 0) {
                const japanContainer = document.getElementById('japan');

                data.japanDoc.forEach(element => {

                    const predictionDiv = document.createElement('div');
                    predictionDiv.innerHTML = `
                        <p><strong>Name:</strong> ${element.name}</p>
                        <p><strong>Biggest Surprise:</strong> ${element.biggestSurprise}</p>
                        <p><strong>Biggest Flop:</strong> ${element.biggestFlop}</p>
                        <p><strong>Sprint Pole:</strong> ${element.sprintPole}</p>
                        <p><strong>Sprint Winner:</strong> ${element.sprintWinner}</p>
                        <p><strong>First Place:</strong> ${element.firstPlace}</p>
                        <p><strong>Second Place:</strong> ${element.secondPlace}</p>
                        <p><strong>Third Place:</strong> ${element.thirdPlace}</p>
                        <p><strong>Crazy Prediction:</strong> ${element.crazyPrediction}</p>
                        <hr>
                    `;
                    japanContainer.appendChild(predictionDiv);
                });
            } else {
                document.getElementById('australia').textContent = 'No data available for Japan';
            }

            if (Array.isArray(data.chinaDoc) && data.chinaDoc.length > 0) {
                const chinaContainer = document.getElementById('china');

                data.chinaDoc.forEach(element => {

                    const predictionDiv = document.createElement('div');
                    predictionDiv.innerHTML = `
                        <p><strong>Name:</strong> ${element.name}</p>
                        <p><strong>Biggest Surprise:</strong> ${element.biggestSurprise}</p>
                        <p><strong>Biggest Flop:</strong> ${element.biggestFlop}</p>
                        <p><strong>Sprint Pole:</strong> ${element.sprintPole}</p>
                        <p><strong>Sprint Winner:</strong> ${element.sprintWinner}</p>
                        <p><strong>First Place:</strong> ${element.firstPlace}</p>
                        <p><strong>Second Place:</strong> ${element.secondPlace}</p>
                        <p><strong>Third Place:</strong> ${element.thirdPlace}</p>
                        <p><strong>Crazy Prediction:</strong> ${element.crazyPrediction}</p>
                        <hr>
                    `;
                    chinaContainer.appendChild(predictionDiv);
                });
            } else {
                document.getElementById('china').textContent = 'No data available for China';
            }

            if (Array.isArray(data.miamiDoc) && data.miamiDoc.length > 0) {
                const miamiContainer = document.getElementById('miami');

                data.miamiDoc.forEach(element => {

                    const predictionDiv = document.createElement('div');
                    predictionDiv.innerHTML = `
                        <p><strong>Name:</strong> ${element.name}</p>
                        <p><strong>Biggest Surprise:</strong> ${element.biggestSurprise}</p>
                        <p><strong>Biggest Flop:</strong> ${element.biggestFlop}</p>
                        <p><strong>Sprint Pole:</strong> ${element.sprintPole}</p>
                        <p><strong>Sprint Winner:</strong> ${element.sprintWinner}</p>
                        <p><strong>First Place:</strong> ${element.firstPlace}</p>
                        <p><strong>Second Place:</strong> ${element.secondPlace}</p>
                        <p><strong>Third Place:</strong> ${element.thirdPlace}</p>
                        <p><strong>Crazy Prediction:</strong> ${element.crazyPrediction}</p>
                        <hr>
                    `;
                    miamiContainer.appendChild(predictionDiv);
                });
            } else {
                document.getElementById('miami').textContent = 'No data available for Miami';
            }

            if (Array.isArray(data.monacoDoc) && data.monacoDoc.length > 0) {
                const monacoContainer = document.getElementById('monaco');

                data.monacoDoc.forEach(element => {

                    const predictionDiv = document.createElement('div');
                    predictionDiv.innerHTML = `
                        <p><strong>Name:</strong> ${element.name}</p>
                        <p><strong>Biggest Surprise:</strong> ${element.biggestSurprise}</p>
                        <p><strong>Biggest Flop:</strong> ${element.biggestFlop}</p>
                        <p><strong>Sprint Pole:</strong> ${element.sprintPole}</p>
                        <p><strong>Sprint Winner:</strong> ${element.sprintWinner}</p>
                        <p><strong>First Place:</strong> ${element.firstPlace}</p>
                        <p><strong>Second Place:</strong> ${element.secondPlace}</p>
                        <p><strong>Third Place:</strong> ${element.thirdPlace}</p>
                        <p><strong>Crazy Prediction:</strong> ${element.crazyPrediction}</p>
                        <hr>
                    `;
                    monacoContainer.appendChild(predictionDiv);
                });
            } else {
                document.getElementById('monaco').textContent = 'No data available for Monaco';
            }

            if (Array.isArray(data.canadaDoc) && data.canadaDoc.length > 0) {
                const canadaContainer = document.getElementById('canada');

                data.canadaDoc.forEach(element => {

                    const predictionDiv = document.createElement('div');
                    predictionDiv.innerHTML = `
                        <p><strong>Name:</strong> ${element.name}</p>
                        <p><strong>Biggest Surprise:</strong> ${element.biggestSurprise}</p>
                        <p><strong>Biggest Flop:</strong> ${element.biggestFlop}</p>
                        <p><strong>Sprint Pole:</strong> ${element.sprintPole}</p>
                        <p><strong>Sprint Winner:</strong> ${element.sprintWinner}</p>
                        <p><strong>First Place:</strong> ${element.firstPlace}</p>
                        <p><strong>Second Place:</strong> ${element.secondPlace}</p>
                        <p><strong>Third Place:</strong> ${element.thirdPlace}</p>
                        <p><strong>Crazy Prediction:</strong> ${element.crazyPrediction}</p>
                        <hr>
                    `;
                    canadaContainer.appendChild(predictionDiv);
                });
            } else {
                document.getElementById('canada').textContent = 'No data available for Canada';
            }

            if (Array.isArray(data.spainDoc) && data.spainDoc.length > 0) {
                const spainContainer = document.getElementById('spain');

                data.spainDoc.forEach(element => {

                    const predictionDiv = document.createElement('div');
                    predictionDiv.innerHTML = `
                        <p><strong>Name:</strong> ${element.name}</p>
                        <p><strong>Biggest Surprise:</strong> ${element.biggestSurprise}</p>
                        <p><strong>Biggest Flop:</strong> ${element.biggestFlop}</p>
                        <p><strong>Sprint Pole:</strong> ${element.sprintPole}</p>
                        <p><strong>Sprint Winner:</strong> ${element.sprintWinner}</p>
                        <p><strong>First Place:</strong> ${element.firstPlace}</p>
                        <p><strong>Second Place:</strong> ${element.secondPlace}</p>
                        <p><strong>Third Place:</strong> ${element.thirdPlace}</p>
                        <p><strong>Crazy Prediction:</strong> ${element.crazyPrediction}</p>
                        <hr>
                    `;
                    spainContainer.appendChild(predictionDiv);
                });
            } else {
                document.getElementById('spain').textContent = 'No data available for Spain';
            }

            if (Array.isArray(data.austriaDoc) && data.austriaDoc.length > 0) {
                const austriaContainer = document.getElementById('austria');

                data.austriaDoc.forEach(element => {

                    const predictionDiv = document.createElement('div');
                    predictionDiv.innerHTML = `
                        <p><strong>Name:</strong> ${element.name}</p>
                        <p><strong>Biggest Surprise:</strong> ${element.biggestSurprise}</p>
                        <p><strong>Biggest Flop:</strong> ${element.biggestFlop}</p>
                        <p><strong>Sprint Pole:</strong> ${element.sprintPole}</p>
                        <p><strong>Sprint Winner:</strong> ${element.sprintWinner}</p>
                        <p><strong>First Place:</strong> ${element.firstPlace}</p>
                        <p><strong>Second Place:</strong> ${element.secondPlace}</p>
                        <p><strong>Third Place:</strong> ${element.thirdPlace}</p>
                        <p><strong>Crazy Prediction:</strong> ${element.crazyPrediction}</p>
                        <hr>
                    `;
                    austriaContainer.appendChild(predictionDiv);
                });
            } else {
                document.getElementById('austria').textContent = 'No data available for Austria';
            }

            if (Array.isArray(data.silverstoneDoc) && data.silverstoneDoc.length > 0) {
                const silverstoneContainer = document.getElementById('silverstone');

                data.silverstoneDoc.forEach(element => {

                    const predictionDiv = document.createElement('div');
                    predictionDiv.innerHTML = `
                        <p><strong>Name:</strong> ${element.name}</p>
                        <p><strong>Biggest Surprise:</strong> ${element.biggestSurprise}</p>
                        <p><strong>Biggest Flop:</strong> ${element.biggestFlop}</p>
                        <p><strong>Sprint Pole:</strong> ${element.sprintPole}</p>
                        <p><strong>Sprint Winner:</strong> ${element.sprintWinner}</p>
                        <p><strong>First Place:</strong> ${element.firstPlace}</p>
                        <p><strong>Second Place:</strong> ${element.secondPlace}</p>
                        <p><strong>Third Place:</strong> ${element.thirdPlace}</p>
                        <p><strong>Crazy Prediction:</strong> ${element.crazyPrediction}</p>
                        <hr>
                    `;
                    silverstoneContainer.appendChild(predictionDiv);
                });
            } else {
                document.getElementById('silverstone').textContent = 'No data available for Silverstone';
            }

            if (Array.isArray(data.hungaryDoc) && data.hungaryDoc.length > 0) {
                const hungaryContainer = document.getElementById('hungary');

                data.hungaryDoc.forEach(element => {

                    const predictionDiv = document.createElement('div');
                    predictionDiv.innerHTML = `
                        <p><strong>Name:</strong> ${element.name}</p>
                        <p><strong>Biggest Surprise:</strong> ${element.biggestSurprise}</p>
                        <p><strong>Biggest Flop:</strong> ${element.biggestFlop}</p>
                        <p><strong>Sprint Pole:</strong> ${element.sprintPole}</p>
                        <p><strong>Sprint Winner:</strong> ${element.sprintWinner}</p>
                        <p><strong>First Place:</strong> ${element.firstPlace}</p>
                        <p><strong>Second Place:</strong> ${element.secondPlace}</p>
                        <p><strong>Third Place:</strong> ${element.thirdPlace}</p>
                        <p><strong>Crazy Prediction:</strong> ${element.crazyPrediction}</p>
                        <hr>
                    `;
                    hungaryContainer.appendChild(predictionDiv);
                });
            } else {
                document.getElementById('hungary').textContent = 'No data available for Hungary';
            }

            if (Array.isArray(data.belgiumDoc) && data.belgiumDoc.length > 0) {
                const belgiumContainer = document.getElementById('belgium');

                data.belgiumDoc.forEach(element => {

                    const predictionDiv = document.createElement('div');
                    predictionDiv.innerHTML = `
                        <p><strong>Name:</strong> ${element.name}</p>
                        <p><strong>Biggest Surprise:</strong> ${element.biggestSurprise}</p>
                        <p><strong>Biggest Flop:</strong> ${element.biggestFlop}</p>
                        <p><strong>Sprint Pole:</strong> ${element.sprintPole}</p>
                        <p><strong>Sprint Winner:</strong> ${element.sprintWinner}</p>
                        <p><strong>First Place:</strong> ${element.firstPlace}</p>
                        <p><strong>Second Place:</strong> ${element.secondPlace}</p>
                        <p><strong>Third Place:</strong> ${element.thirdPlace}</p>
                        <p><strong>Crazy Prediction:</strong> ${element.crazyPrediction}</p>
                        <hr>
                    `;
                    belgiumContainer.appendChild(predictionDiv);
                });
            } else {
                document.getElementById('belgium').textContent = 'No data available for Belgium';
            }

            if (Array.isArray(data.netherlandsDoc) && data.netherlandsDoc.length > 0) {
                const netherlandsContainer = document.getElementById('netherlands');

                data.netherlandsDoc.forEach(element => {

                    const predictionDiv = document.createElement('div');
                    predictionDiv.innerHTML = `
                        <p><strong>Name:</strong> ${element.name}</p>
                        <p><strong>Biggest Surprise:</strong> ${element.biggestSurprise}</p>
                        <p><strong>Biggest Flop:</strong> ${element.biggestFlop}</p>
                        <p><strong>Sprint Pole:</strong> ${element.sprintPole}</p>
                        <p><strong>Sprint Winner:</strong> ${element.sprintWinner}</p>
                        <p><strong>First Place:</strong> ${element.firstPlace}</p>
                        <p><strong>Second Place:</strong> ${element.secondPlace}</p>
                        <p><strong>Third Place:</strong> ${element.thirdPlace}</p>
                        <p><strong>Crazy Prediction:</strong> ${element.crazyPrediction}</p>
                        <hr>
                    `;
                    netherlandsContainer.appendChild(predictionDiv);
                });
            } else {
                document.getElementById('netherlands').textContent = 'No data available for Netherlands';
            }

            if (Array.isArray(data.monzaDoc) && data.monzaDoc.length > 0) {
                const monzaContainer = document.getElementById('monza');

                data.monzaDoc.forEach(element => {

                    const predictionDiv = document.createElement('div');
                    predictionDiv.innerHTML = `
                        <p><strong>Name:</strong> ${element.name}</p>
                        <p><strong>Biggest Surprise:</strong> ${element.biggestSurprise}</p>
                        <p><strong>Biggest Flop:</strong> ${element.biggestFlop}</p>
                        <p><strong>Sprint Pole:</strong> ${element.sprintPole}</p>
                        <p><strong>Sprint Winner:</strong> ${element.sprintWinner}</p>
                        <p><strong>First Place:</strong> ${element.firstPlace}</p>
                        <p><strong>Second Place:</strong> ${element.secondPlace}</p>
                        <p><strong>Third Place:</strong> ${element.thirdPlace}</p>
                        <p><strong>Crazy Prediction:</strong> ${element.crazyPrediction}</p>
                        <hr>
                    `;
                    monzaContainer.appendChild(predictionDiv);
                });
            } else {
                document.getElementById('monza').textContent = 'No data available for Monza';
            }

            if (Array.isArray(data.azerbaijanDoc) && data.azerbaijanDoc.length > 0) {
                const azerbaijanContainer = document.getElementById('azerbaijan');

                data.azerbaijanDoc.forEach(element => {

                    const predictionDiv = document.createElement('div');
                    predictionDiv.innerHTML = `
                        <p><strong>Name:</strong> ${element.name}</p>
                        <p><strong>Biggest Surprise:</strong> ${element.biggestSurprise}</p>
                        <p><strong>Biggest Flop:</strong> ${element.biggestFlop}</p>
                        <p><strong>Sprint Pole:</strong> ${element.sprintPole}</p>
                        <p><strong>Sprint Winner:</strong> ${element.sprintWinner}</p>
                        <p><strong>First Place:</strong> ${element.firstPlace}</p>
                        <p><strong>Second Place:</strong> ${element.secondPlace}</p>
                        <p><strong>Third Place:</strong> ${element.thirdPlace}</p>
                        <p><strong>Crazy Prediction:</strong> ${element.crazyPrediction}</p>
                        <hr>
                    `;
                    azerbaijanContainer.appendChild(predictionDiv);
                });
            } else {
                document.getElementById('azerbaijan').textContent = 'No data available for Azerbaijan';
            }

            if (Array.isArray(data.singaporeDoc) && data.singaporeDoc.length > 0) {
                const singaporeContainer = document.getElementById('singapore');

                data.singaporeDoc.forEach(element => {

                    const predictionDiv = document.createElement('div');
                    predictionDiv.innerHTML = `
                        <p><strong>Name:</strong> ${element.name}</p>
                        <p><strong>Biggest Surprise:</strong> ${element.biggestSurprise}</p>
                        <p><strong>Biggest Flop:</strong> ${element.biggestFlop}</p>
                        <p><strong>Sprint Pole:</strong> ${element.sprintPole}</p>
                        <p><strong>Sprint Winner:</strong> ${element.sprintWinner}</p>
                        <p><strong>First Place:</strong> ${element.firstPlace}</p>
                        <p><strong>Second Place:</strong> ${element.secondPlace}</p>
                        <p><strong>Third Place:</strong> ${element.thirdPlace}</p>
                        <p><strong>Crazy Prediction:</strong> ${element.crazyPrediction}</p>
                        <hr>
                    `;
                    singaporeContainer.appendChild(predictionDiv);
                });
            } else {
                document.getElementById('singapore').textContent = 'No data available for Singapore';
            }

            if (Array.isArray(data.texasDoc) && data.texasDoc.length > 0) {
                const texasContainer = document.getElementById('texas');

                data.texasDoc.forEach(element => {

                    const predictionDiv = document.createElement('div');
                    predictionDiv.innerHTML = `
                        <p><strong>Name:</strong> ${element.name}</p>
                        <p><strong>Biggest Surprise:</strong> ${element.biggestSurprise}</p>
                        <p><strong>Biggest Flop:</strong> ${element.biggestFlop}</p>
                        <p><strong>Sprint Pole:</strong> ${element.sprintPole}</p>
                        <p><strong>Sprint Winner:</strong> ${element.sprintWinner}</p>
                        <p><strong>First Place:</strong> ${element.firstPlace}</p>
                        <p><strong>Second Place:</strong> ${element.secondPlace}</p>
                        <p><strong>Third Place:</strong> ${element.thirdPlace}</p>
                        <p><strong>Crazy Prediction:</strong> ${element.crazyPrediction}</p>
                        <hr>
                    `;
                    texasContainer.appendChild(predictionDiv);
                });
            } else {
                document.getElementById('texas').textContent = 'No data available for Texas';
            }

            if (Array.isArray(data.mexicoDoc) && data.mexicoDoc.length > 0) {
                const mexicoContainer = document.getElementById('texas');

                data.mexicoDoc.forEach(element => {

                    const predictionDiv = document.createElement('div');
                    predictionDiv.innerHTML = `
                        <p><strong>Name:</strong> ${element.name}</p>
                        <p><strong>Biggest Surprise:</strong> ${element.biggestSurprise}</p>
                        <p><strong>Biggest Flop:</strong> ${element.biggestFlop}</p>
                        <p><strong>Sprint Pole:</strong> ${element.sprintPole}</p>
                        <p><strong>Sprint Winner:</strong> ${element.sprintWinner}</p>
                        <p><strong>First Place:</strong> ${element.firstPlace}</p>
                        <p><strong>Second Place:</strong> ${element.secondPlace}</p>
                        <p><strong>Third Place:</strong> ${element.thirdPlace}</p>
                        <p><strong>Crazy Prediction:</strong> ${element.crazyPrediction}</p>
                        <hr>
                    `;
                    mexicoContainer.appendChild(predictionDiv);
                });
            } else {
                document.getElementById('mexico').textContent = 'No data available for Mexico';
            }

            if (Array.isArray(data.brazilDoc) && data.brazilDoc.length > 0) {
                const brazilContainer = document.getElementById('brazil');

                data.brazilDoc.forEach(element => {

                    const predictionDiv = document.createElement('div');
                    predictionDiv.innerHTML = `
                        <p><strong>Name:</strong> ${element.name}</p>
                        <p><strong>Biggest Surprise:</strong> ${element.biggestSurprise}</p>
                        <p><strong>Biggest Flop:</strong> ${element.biggestFlop}</p>
                        <p><strong>Sprint Pole:</strong> ${element.sprintPole}</p>
                        <p><strong>Sprint Winner:</strong> ${element.sprintWinner}</p>
                        <p><strong>First Place:</strong> ${element.firstPlace}</p>
                        <p><strong>Second Place:</strong> ${element.secondPlace}</p>
                        <p><strong>Third Place:</strong> ${element.thirdPlace}</p>
                        <p><strong>Crazy Prediction:</strong> ${element.crazyPrediction}</p>
                        <hr>
                    `;
                    brazilContainer.appendChild(predictionDiv);
                });
            } else {
                document.getElementById('brazil').textContent = 'No data available for Brazil';
            }

            if (Array.isArray(data.lasvegasDoc) && data.lasvegasDoc.length > 0) {
                const lasvegasContainer = document.getElementById('lasvegas');

                data.lasvegasDoc.forEach(element => {

                    const predictionDiv = document.createElement('div');
                    predictionDiv.innerHTML = `
                        <p><strong>Name:</strong> ${element.name}</p>
                        <p><strong>Biggest Surprise:</strong> ${element.biggestSurprise}</p>
                        <p><strong>Biggest Flop:</strong> ${element.biggestFlop}</p>
                        <p><strong>Sprint Pole:</strong> ${element.sprintPole}</p>
                        <p><strong>Sprint Winner:</strong> ${element.sprintWinner}</p>
                        <p><strong>First Place:</strong> ${element.firstPlace}</p>
                        <p><strong>Second Place:</strong> ${element.secondPlace}</p>
                        <p><strong>Third Place:</strong> ${element.thirdPlace}</p>
                        <p><strong>Crazy Prediction:</strong> ${element.crazyPrediction}</p>
                        <hr>
                    `;
                    lasvegasContainer.appendChild(predictionDiv);
                });
            } else {
                document.getElementById('lasvegas').textContent = 'No data available for Las Vegas';
            }

            if (Array.isArray(data.qatarDoc) && data.qatarDoc.length > 0) {
                const qatarContainer = document.getElementById('qatar');

                data.qatarDoc.forEach(element => {

                    const predictionDiv = document.createElement('div');
                    predictionDiv.innerHTML = `
                        <p><strong>Name:</strong> ${element.name}</p>
                        <p><strong>Biggest Surprise:</strong> ${element.biggestSurprise}</p>
                        <p><strong>Biggest Flop:</strong> ${element.biggestFlop}</p>
                        <p><strong>Sprint Pole:</strong> ${element.sprintPole}</p>
                        <p><strong>Sprint Winner:</strong> ${element.sprintWinner}</p>
                        <p><strong>First Place:</strong> ${element.firstPlace}</p>
                        <p><strong>Second Place:</strong> ${element.secondPlace}</p>
                        <p><strong>Third Place:</strong> ${element.thirdPlace}</p>
                        <p><strong>Crazy Prediction:</strong> ${element.crazyPrediction}</p>
                        <hr>
                    `;
                    qatarContainer.appendChild(predictionDiv);
                });
            } else {
                document.getElementById('qatar').textContent = 'No data available for Qatar';
            }

            if (Array.isArray(data.abudhabiDoc) && data.abudhabiDoc.length > 0) {
                const abudhabiContainer = document.getElementById('abudhabi');

                data.abudhabiDoc.forEach(element => {

                    const predictionDiv = document.createElement('div');
                    predictionDiv.innerHTML = `
                        <p><strong>Name:</strong> ${element.name}</p>
                        <p><strong>Biggest Surprise:</strong> ${element.biggestSurprise}</p>
                        <p><strong>Biggest Flop:</strong> ${element.biggestFlop}</p>
                        <p><strong>Sprint Pole:</strong> ${element.sprintPole}</p>
                        <p><strong>Sprint Winner:</strong> ${element.sprintWinner}</p>
                        <p><strong>First Place:</strong> ${element.firstPlace}</p>
                        <p><strong>Second Place:</strong> ${element.secondPlace}</p>
                        <p><strong>Third Place:</strong> ${element.thirdPlace}</p>
                        <p><strong>Crazy Prediction:</strong> ${element.crazyPrediction}</p>
                        <hr>
                    `;
                    abudhabiContainer.appendChild(predictionDiv);
                });
            } else {
                document.getElementById('abudhabi').textContent = 'No data available for Abu Dhabi';
            }
        })
        .catch(error => {
            console.error('Error fetching predictions data:', error);
        });
});
