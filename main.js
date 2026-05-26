

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
        registerBtn.href = student.luma; // Grabs the URL from the variable
        registerBtn.classList.remove('hidden');
    } else {
        resultDiv.innerHTML = `<p class="text-red-400 text-sm">Registration number not found.</p>`;
        registerBtn.classList.add('hidden');
    }
}