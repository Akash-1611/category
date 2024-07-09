// script.js
document.addEventListener('DOMContentLoaded', function () {
    const occupations = [
        { id: 1, name: 'Plumber' },
        { id: 2, name: 'Electrician' },
        { id: 3, name: 'Carpenter' }
    ];

    const labours = {
        1: [{ name: 'John Doe', details: 'Experienced in residential plumbing.' }, { name: 'Jane Smith', details: 'Expert in commercial plumbing.' }],
        2: [{ name: 'Mike Johnson', details: 'Specializes in wiring and lighting.' }, { name: 'Emily Davis', details: 'Expert in electrical repairs.' }],
        3: [{ name: 'James Brown', details: 'Skilled in furniture making.' }, { name: 'Sarah Wilson', details: 'Expert in wood carving.' }]
    };

    const occupationList = document.getElementById('occupation-list');
    const labourList = document.getElementById('labour-list');
    const backButton = document.getElementById('back-button');

    function createCard(name, details, isOccupation = true, id = null) {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<h3>${name}</h3>${isOccupation ? '' : `<p>${details}</p><button class="hire-button">Hire</button>`}`;
        
        card.addEventListener('click', (e) => {
            if (isOccupation) {
                showLabours(id);
            }
        });

        if (!isOccupation) {
            const hireButton = card.querySelector('.hire-button');
            hireButton.addEventListener('click', (e) => {
                e.stopPropagation();
                alert('Notification Sent');
            });
        }

        return card;
    }

    function showLabours(occupationId) {
        occupationList.style.display = 'none';
        labourList.style.display = 'flex';
        labourList.innerHTML = ''; // Clear previous labours
        labourList.appendChild(backButton);

        labours[occupationId].forEach(labour => {
            labourList.appendChild(createCard(labour.name, labour.details, false));
        });
    }

    occupations.forEach(occupation => {
        occupationList.appendChild(createCard(occupation.name, '', true, occupation.id));
    });

    backButton.addEventListener('click', () => {
        occupationList.style.display = 'flex';
        labourList.style.display = 'none';
    });
});
