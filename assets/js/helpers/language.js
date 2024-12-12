function changeLanguage() {
	const toggleSwitch = document.getElementById('language-toggle');
	toggleSwitch.addEventListener('change', () => {
		if (toggleSwitch.checked) {
			window.location.href = 'index-en.html';
		} else {
			window.location.href = 'index.html';
		}
	});
}

document.addEventListener('DOMContentLoaded', changeLanguage);

export default changeLanguage;
