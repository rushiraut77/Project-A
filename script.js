const addButton = document.getElementById('add-button');
        const bucketInput = document.getElementById('bucket-item');
        const bucketList = document.getElementById('bucket-list');

        addButton.addEventListener('click', () => {
            const newItemText = bucketInput.value.trim();

            if (newItemText !== '') {
                const listItem = document.createElement('li');
                listItem.innerHTML = `<i class="fa-solid fa-star"></i> ${newItemText}`;

                bucketList.appendChild(listItem);

                bucketInput.value = '';
            }
        });

        bucketInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                addButton.click();
            }
        });