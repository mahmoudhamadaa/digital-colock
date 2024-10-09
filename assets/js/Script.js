 $(document).ready(function() {
            var clock = new FlipClock($('#clock'), {
                clockFace: 'TwentyFourHourClock'
            });

            function updateDate() {
                const now = new Date();
                const date = now.toDateString();
                document.getElementById('date').textContent = date;
            }

            setInterval(updateDate, 1000);
            updateDate();
        });