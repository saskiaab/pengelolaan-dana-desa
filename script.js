document.addEventListener("DOMContentLoaded", function () {
    // Contoh: Data penyaluran dana terbaru
    const allocations = [
        { proyek: "Jalan Desa", dana: "Rp100,000,000", status: "Selesai" },
        { proyek: "Perbaikan Irigasi", dana: "Rp50,000,000", status: "Dalam Proses" },
    ];

    const allocationSection = document.getElementById("recent-fund-allocations");

    allocations.forEach((item) => {
        const p = document.createElement("p");
        p.textContent = ${item.proyek}: ${item.dana} - Status: ${item.status};
        allocationSection.appendChild(p);
    });
});