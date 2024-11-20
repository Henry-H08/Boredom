let score = 0;
        let autoClickers = 0;

        function incrementScore() {
            score++;
            document.getElementById('score').innerText = 'Score: ' + score;
        }

        function buyItem(item, cost) {
            if (score >= cost) {
                score -= cost;
                document.getElementById('score').innerText = 'Score: ' + score;
                alert(item + ' purchased!');
            } else {
                alert('Not enough points!');
            }
        }

        function buyAutoClicker() {
            const cost = 50;
            if (score >= cost) {
                score -= cost;
                autoClickers++;
                document.getElementById('score').innerText = 'Score: ' + score;
                alert('Auto-Clicker purchased!');
                startAutoClicker();
            } else {
                alert('Not enough points!');
            }
        }

        function startAutoClicker() {
            setInterval(() => {
                score += autoClickers;
                document.getElementById('score').innerText = 'Score: ' + score;
            }, 1000);
        }

        function toggleShop() {
            const shop = document.getElementById('shop');
            shop.style.display = shop.style.display === 'none' ? 'block' : 'none';
        }