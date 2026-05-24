// Example Mapping Data
const studentData = {
    "2021ICTS001": { name: "Yashen Fernando", company: "WSO2", luma: "https://luma.com/450ykgmq" },
    "2021ICTS002": { name: "Jane Doe", company: "AIFS", luma: "https://lu.ma/aifs-visit" },
    "2021ICTS003": { name: "John Smith", company: "24x7", luma: "https://lu.ma/24x7-visit" }
};

function checkRegistration() {
    const regNum = document.getElementById('regInput').value.trim().toUpperCase();
    const resultDiv = document.getElementById('resultArea');
    const registerBtn = document.getElementById('lumaBtn');
    
    if (studentData[regNum]) {
        const student = studentData[regNum];
        resultDiv.innerHTML = `
            <div class="p-4 rounded-lg bg-purple-900/20 border border-purple-500/50 animate-pulse">
                <p class="text-gray-300">Welcome, <span class="text-white font-bold">${student.name}</span></p>
                <p class="text-sm">Assigned Industry: <span class="text-purple-400 font-bold">${student.company}</span></p>
            </div>`;
        registerBtn.href = student.luma;
        registerBtn.classList.remove('hidden');
    } else {
        resultDiv.innerHTML = `<p class="text-red-400 text-sm">Registration number not found.</p>`;
        registerBtn.classList.add('hidden');
    }
}