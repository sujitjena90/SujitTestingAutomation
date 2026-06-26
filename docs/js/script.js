// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    initializeComponents();
});

// Initialize all interactive components
function initializeComponents() {
    setupRadioButtons();
    setupSuggestionField();
    setupWindowActions();
    setupTabActions();
    setupAlertConfirm();
    setupHideShow();
    setupNavigation();
    setupDropdown();
}

// ========== Radio Buttons ==========
function setupRadioButtons() {
    const radioLabels = document.querySelectorAll('.radio-label');
    radioLabels.forEach(label => {
        label.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        label.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// ========== Suggestion/Autocomplete Field ==========
function setupSuggestionField() {
    const countryInput = document.getElementById('countryInput');
    const suggestionDropdown = document.getElementById('suggestionDropdown');

    const countries = [
        'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Argentina', 'Armenia', 'Australia',
        'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium',
        'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria',
        'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Central African',
        'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Costa Rica', 'Croatia', 'Cuba',
        'Cyprus', 'Czech Republic', 'Czechia', 'Denmark', 'Djibouti', 'Dominica', 'Dominican',
        'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini',
        'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana',
        'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras',
        'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy',
        'Ivory Coast', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kuwait',
        'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein',
        'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta',
        'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco',
        'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal',
        'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'North Macedonia',
        'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay',
        'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda',
        'Saint Kitts', 'Saint Lucia', 'Saint Vincent', 'Samoa', 'San Marino', 'Sao Tome',
        'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia',
        'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Korea', 'South Sudan',
        'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Taiwan',
        'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago',
        'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates',
        'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City',
        'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
    ];

    if (!countryInput) return;

    countryInput.addEventListener('input', function() {
        const value = this.value.toLowerCase();
        suggestionDropdown.innerHTML = '';

        if (value.length === 0) {
            suggestionDropdown.style.display = 'none';
            return;
        }

        const filtered = countries.filter(country =>
            country.toLowerCase().includes(value)
        ).slice(0, 10);

        if (filtered.length > 0) {
            suggestionDropdown.style.display = 'block';
            filtered.forEach(country => {
                const div = document.createElement('div');
                div.className = 'suggestion-item';
                div.textContent = country;
                div.addEventListener('click', function() {
                    countryInput.value = country;
                    suggestionDropdown.style.display = 'none';
                });
                div.addEventListener('mouseenter', function() {
                    this.style.backgroundColor = '#f0f8f8';
                    this.style.color = '#00a6a6';
                    this.style.paddingLeft = '20px';
                });
                div.addEventListener('mouseleave', function() {
                    this.style.backgroundColor = 'white';
                    this.style.color = 'black';
                    this.style.paddingLeft = '10px';
                });
                suggestionDropdown.appendChild(div);
            });
        } else {
            suggestionDropdown.style.display = 'none';
        }
    });

    // Close suggestions when clicking outside
    document.addEventListener('click', function(e) {
        if (e.target !== countryInput && e.target !== suggestionDropdown) {
            suggestionDropdown.style.display = 'none';
        }
    });
}

// ========== Window Actions ==========
function setupWindowActions() {
    const openWindowBtn = document.getElementById('openWindowBtn');
    const windowMessage = document.getElementById('windowMessage');

    if (openWindowBtn) {
        openWindowBtn.addEventListener('click', function() {
            // Simulate window open
            if (windowMessage) {
                windowMessage.style.display = 'block';
                windowMessage.textContent = '✓ New window simulated!';
                setTimeout(() => {
                    windowMessage.style.display = 'none';
                }, 3000);
            }
        });

        // Hover effect
        openWindowBtn.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#006666';
            this.style.boxShadow = '0 4px 12px rgba(0, 166, 166, 0.3)';
        });
        openWindowBtn.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#00a6a6';
            this.style.boxShadow = 'none';
        });
    }
}

// ========== Tab Actions ==========
function setupTabActions() {
    const openTabBtn = document.getElementById('openTabBtn');
    const tabMessage = document.getElementById('tabMessage');

    if (openTabBtn) {
        openTabBtn.addEventListener('click', function() {
            // Simulate tab open
            if (tabMessage) {
                tabMessage.style.display = 'block';
                tabMessage.textContent = '✓ New tab simulated!';
                setTimeout(() => {
                    tabMessage.style.display = 'none';
                }, 3000);
            }
        });

        // Hover effect
        openTabBtn.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#006666';
            this.style.boxShadow = '0 4px 12px rgba(0, 166, 166, 0.3)';
        });
        openTabBtn.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#00a6a6';
            this.style.boxShadow = 'none';
        });
    }
}

// ========== Alert & Confirm ==========
function setupAlertConfirm() {
    const nameInput = document.getElementById('nameInput');
    const alertBtn = document.getElementById('alertBtn');
    const confirmBtn = document.getElementById('confirmBtn');

    if (alertBtn) {
        alertBtn.addEventListener('click', function() {
            const name = nameInput ? nameInput.value : '';
            if (name.trim() === '') {
                alert('Please enter your name!');
            } else {
                alert(`Hello ${name}! Welcome to Sujit Jena's Automation Academy!`);
            }
        });

        // Hover effect
        alertBtn.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#ff5252';
            this.style.transform = 'scale(1.05)';
        });
        alertBtn.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#ff6b6b';
            this.style.transform = 'scale(1)';
        });
    }

    if (confirmBtn) {
        confirmBtn.addEventListener('click', function() {
            const name = nameInput ? nameInput.value : '';
            if (name.trim() === '') {
                alert('Please enter your name!');
            } else {
                const result = confirm(`Are you sure, ${name}? Do you want to proceed?`);
                if (result) {
                    alert('Thank you! You have confirmed.');
                } else {
                    alert('You cancelled the action.');
                }
            }
        });

        // Hover effect
        confirmBtn.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#006666';
            this.style.transform = 'scale(1.05)';
        });
        confirmBtn.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#00a6a6';
            this.style.transform = 'scale(1)';
        });
    }
}

// ========== Hide/Show Element ==========
function setupHideShow() {
    const hideBtn = document.getElementById('hideBtn');
    const showBtn = document.getElementById('showBtn');
    const displayElement = document.getElementById('displayElement');

    if (hideBtn) {
        hideBtn.addEventListener('click', function() {
            if (displayElement) {
                displayElement.style.display = 'none';
            }
        });

        hideBtn.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#006666';
            this.style.transform = 'scale(1.05)';
        });
        hideBtn.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#00a6a6';
            this.style.transform = 'scale(1)';
        });
    }

    if (showBtn) {
        showBtn.addEventListener('click', function() {
            if (displayElement) {
                displayElement.style.display = 'block';
            }
        });

        showBtn.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#006666';
            this.style.transform = 'scale(1.05)';
        });
        showBtn.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#00a6a6';
            this.style.transform = 'scale(1)';
        });
    }
}

// ========== Navigation ==========
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.href.indexOf('#') === -1 || this.href.endsWith('#')) {
                // Regular link, allow navigation
                return;
            }
            // Prevent default for hash links
            e.preventDefault();
        });

        // Hover smooth effect
        link.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.textDecoration = 'underline';
            }
        });
        link.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.textDecoration = 'none';
            }
        });
    });
}

// ========== Dropdown Menu ==========
function setupDropdown() {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-menu');

        if (toggle && menu) {
            toggle.addEventListener('click', function(e) {
                e.preventDefault();
                const isVisible = menu.style.display === 'flex';
                menu.style.display = isVisible ? 'none' : 'flex';
            });

            dropdown.addEventListener('mouseleave', function() {
                menu.style.display = 'none';
            });
        }
    });

    // Close dropdown when link is clicked
    const dropdownLinks = document.querySelectorAll('.dropdown-menu a');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function() {
            const menu = this.closest('.dropdown-menu');
            if (menu) {
                menu.style.display = 'none';
            }
        });
    });
}

// ========== Smooth Scroll ==========
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// ========== Button Hover Effects ==========
function setupButtonHovers() {
    const allButtons = document.querySelectorAll('.btn');
    allButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
}

// ========== Table Row Hover ==========
document.addEventListener('DOMContentLoaded', function() {
    const tableRows = document.querySelectorAll('.data-table tbody tr, .data-table-fixed tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f0f8f8';
        });
        row.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'white';
        });
    });
});

// ========== Form Input Focus Effects ==========
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.input-field, .dropdown-field');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.borderColor = '#00a6a6';
            this.style.boxShadow = '0 0 8px rgba(0, 166, 166, 0.2)';
        });
        input.addEventListener('blur', function() {
            this.style.borderColor = '#ddd';
            this.style.boxShadow = 'none';
        });

        input.addEventListener('mouseenter', function() {
            if (document.activeElement !== this) {
                this.style.borderColor = '#00a6a6';
            }
        });
        input.addEventListener('mouseleave', function() {
            if (document.activeElement !== this) {
                this.style.borderColor = '#ddd';
            }
        });
    });
});

// ========== Enroll Button Click Handler ==========
document.addEventListener('DOMContentLoaded', function() {
    const enrollButtons = document.querySelectorAll('.course-footer .btn-secondary');
    enrollButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const courseCard = this.closest('.course-card-large') || this.closest('.course-card');
            const courseTitle = courseCard ? courseCard.querySelector('h3').textContent : 'the course';
            alert(`Thank you! You have enrolled in: "${courseTitle}"\n\nWelcome to Sujit Jena's Automation Academy!`);
        });
    });
});

// ========== Filter Button Handler ==========
document.addEventListener('DOMContentLoaded', function() {
    const filterButton = document.querySelector('.filter-section .btn-secondary');
    if (filterButton) {
        filterButton.addEventListener('click', function() {
            alert('Filters applied! (This is a demo)');
        });
    }
});

// ========== CTA Button Handler ==========
document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.querySelector('.cta-section .btn-primary');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            alert('Explore our Learning Paths to start your journey!');
        });
    }
});

// ========== Mouse Hover Effect on Buttons ==========
document.addEventListener('DOMContentLoaded', function() {
    const hoverButton = document.querySelector('.btn-hover-example');
    if (hoverButton) {
        hoverButton.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#0056b3';
            this.style.transform = 'scale(1.1)';
            this.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
        });
        hoverButton.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#007bff';
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    }
});

// ========== Footer Link Hover Effects ==========
document.addEventListener('DOMContentLoaded', function() {
    const footerLinks = document.querySelectorAll('.footer-link');
    footerLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.color = '#00a6a6';
            this.style.paddingLeft = '5px';
        });
        link.addEventListener('mouseleave', function() {
            this.style.color = '#ccc';
            this.style.paddingLeft = '0';
        });
    });
});

console.log('✓ Automation Academy - All scripts loaded successfully!');
