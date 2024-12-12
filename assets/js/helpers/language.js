function changeLanguage() {
	const toggleSwitch = document.getElementById('language-toggle');

	const savedLanguage = localStorage.getItem('language');
	if (savedLanguage === 'en') {
		toggleSwitch.checked = true;
	}

	toggleSwitch.addEventListener('change', () => {
		if (toggleSwitch.checked) {
			localStorage.setItem('language', 'en');
			window.location.href = 'index-en.html';
		} else {
			localStorage.setItem('language', 'default');
			window.location.href = 'index.html';
		}
	});
}

document.addEventListener('DOMContentLoaded', changeLanguage);

export default changeLanguage;
