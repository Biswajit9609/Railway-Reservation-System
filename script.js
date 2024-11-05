const stations = [
    { name: "Howrah Junction", code: "HWH" },
    { name: "Sealdah", code: "SDAH" },
    { name: "Kolkata", code: "KOAA" },
    { name: "Asansol Junction", code: "ASN" },
    { name: "Shalimar", code: "SHM" },
    { name: "New Jalpaiguri", code: "NJP" },
    { name: "Siliguri Junction", code: "SGUJ" },
    { name: "Kharagpur Junction", code: "KGP" },
    { name: "Santragachi Junction", code: "SRC" },
    { name: "Durgapur", code: "DGR" },
    { name: "Bardhaman Junction", code: "BWN" },
    { name: "Dankuni", code: "DKAE" },
    { name: "Malda Town", code: "MLDT" },
    { name: "Alipurduar Junction", code: "APDJ" },
    { name: "Tamluk", code: "TMZ" },
    { name: "Haldia", code: "HLZ" },
    { name: "Cooch Behar", code: "COB" },
    { name: "Dum Dum Junction", code: "DDJ" },
    { name: "Bangaon Junction", code: "BNJ" },
    { name: "Barasat Junction", code: "BT" },
    { name: "Naihati Junction", code: "NH" },
    { name: "Barrackpore", code: "BP" },
    { name: "Ranaghat Junction", code: "RHA" },
    { name: "Krishnanagar City Junction", code: "KNJ" },
    { name: "Lalgola", code: "LGL" },
    { name: "Uluberia", code: "ULB" },
    { name: "Mecheda", code: "MCA" },
    { name: "Kolaghat", code: "KIG" },
    { name: "Panskura", code: "PKU" },
    { name: "Balichak", code: "BCK" },
    { name: "Andal Junction", code: "UDL" },
    { name: "Raniganj", code: "RNG" },
    { name: "Kulti", code: "ULT" },
    { name: "Barakar", code: "BRR" },
    { name: "Chittaranjan", code: "CRJ" },
    { name: "Jhajha", code: "JAJ" },
    { name: "Madhupur Junction", code: "MDP" },
    { name: "New Farakka Junction", code: "NFK" },
    { name: "Jangipur Road", code: "JRLE" },
    { name: "Kumedpur", code: "KDPR" },
    { name: "Sahibganj", code: "SBG" },
    { name: "Barharwa Junction", code: "BHW" },
    { name: "Raiganj", code: "RGJ" },
    { name: "Balurghat", code: "BLGT" },
    { name: "Eklakhi", code: "EKI" },
    { name: "Samsi", code: "SM" },
    { name: "Hasimara", code: "HSA" },
    { name: "Binnaguri", code: "BNV" },
    { name: "Rajabhatkhawa", code: "RBK" },
    { name: "Madarihat", code: "MDT" },
    { name: "Falakata", code: "FLK" },
    { name: "Jalpaiguri Road", code: "JPE" },
    { name: "Midnapore", code: "MDN" },
    { name: "Bishnupur", code: "VSU" },
    { name: "Jhargram", code: "JGM" },
    { name: "Garbeta", code: "GBA" },
    { name: "Chandrakona Road", code: "CDGR" },
    { name: "Dantan", code: "DNT" },
    { name: "Belda", code: "BLDA" },
    { name: "Balasore", code: "BLS" },
    { name: "Darjeeling", code: "DJ" },
    { name: "Kurseong", code: "KGN" },
    { name: "Ghoom", code: "GHUM" },
    { name: "Radhikapur", code: "RDP" },
    { name: "Bamanhat", code: "BXT" },
    { name: "Singhabad", code: "SGD" }
];

const selectElementFrom = $('#stationsFrom');
const selectElementTo = $('#stationsTo');

function populateSelect(selectElement) {
    selectElement.append(new Option('', '', true, true));
    stations.forEach(station => {
        const option = new Option(station.name, station.name);
        selectElement.append(option);
    });
    selectElement.select2({
        placeholder: "Enter Station name",
        allowClear: false
    });
    selectElement.on('select2:select', function (e) {
        const selectedStation = e.params.data.text;
        const stationCode = stations.find(station => station.name === selectedStation).code;
        if (selectElement.is('#stationsFrom')) {
            $('#stationCodeFrom').text(`${stationCode}`);
        } else if (selectElement.is('#stationsTo')) {
            $('#stationCodeTo').text(`${stationCode}`);
        }
    });
}

populateSelect(selectElementFrom);
populateSelect(selectElementTo);
const dateInput = document.getElementById('date-input');
        const dayOutput = document.getElementById('day-output');

        dateInput.addEventListener('change', (event) => {
            const selectedDate = new Date(event.target.value);
            const options = { weekday: 'long' };
            const dayName = selectedDate.toLocaleDateString('en-US', options);
            dayOutput.textContent = `${dayName}`;
        });
function handleSelectChange(selectElement){
    const selectedValue = selectElement.value;
    if (selectedValue) {
        window.location.href = selectedValue;
    }
}