$(document).ready(function () {
    $('[data-toggle="tooltip"]').attr('title', () => {
        let words = ["Lorem, ipsum dolor sit amet", "dolores corporis facilis quidem", "Id asperiores, numquam amet laboriosam", "a blanditiis culpa sit velit nemo inventore nobis"];
        return words[Math.floor(Math.random() * words.length)];
    }).tooltip('fixTitle').tooltip('show');
});