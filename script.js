const studyMaterials = {
    "Java": {
        notes: "https://drive.google.com/file/d/1TQwa6iLSPJyyvmimugZ4Nizc7qjc0psw/preview",
        Roadmap: "https://blog.amigoscode.com/p/your-java-roadmap-for-2024",
        papers: "https://www.manaresults.co.in/jntuh/download1.php?id=114CX052015.pdf&subcode=114CX"
    },
    "Python": {
        notes: "https://drive.google.com/file/d/0B9pZyM5hT0mxWG1DNGpFbmJJbTA/edit?resourcekey=0-ETUDjscqscPvTzi8j5TyiQ",
        Roadmap: "https://medium.com/javarevisited/the-2022-python-programmer-roadmap-bafb365071a3",
        papers: "https://jamalpur.kvs.ac.in/sites/default/files/sample%20paper%20xii%20cs%20python%20board.pdf"
    },
    "Operating System": {
        notes: "https://drive.google.com/file/d/1rdD23XGj3RhdoLoABy7oQiKbsY7989L0/view",
        Roadmap: "https://www.mygreatlearning.com/blog/what-is-operating-system/",
        papers: "https://najishukri.wordpress.com/wp-content/uploads/2011/01/questions-answers.pdf"
    },
    "DBMS": {
        notes: "https://github.com/riti2409/DBMS_SQL-Notes",
        Roadmap: "https://www.studocu.com/in/document/maulana-abul-kalam-azad-university-of-technology/computer-science-and-engineering/dbms-road-map-by-love-babbar/58314342",
        papers: "https://www.manaresults.co.in/download1.php?id=RT31054122022.pdf&subcode=RT31054"
    },
    "C++": {
        notes: "https://docs.google.com/file/d/0Bwec68rHFbJMQXFGTzg0V29fbE0/view?resourcekey=0-RWT_YdhAoqHOFy_ty7finw",
        Roadmap: "https://roadmap.sh/cpp",
        papers: "https://phcp.ac.in/wp-content/uploads/2019/01/3rd-sem-object-oriented-programming-using-c-computer-sample-question-paper.pdf"
    },
    "Data Electronics": {
        notes: "https://pages.uoregon.edu/rayfrey/DigitalNotes.pdf",
        Roadmap: "https://www.geeksforgeeks.org/digital-electronics-logic-design-tutorials/",
        papers: "https://brpaper.com/pu-patiala/bca/2/de"
    },
    "Cloud Computing": {
        notes: "https://drive.google.com/file/d/0BwxUBHTpU9kCWTRJSC1zNEg0RU0/view?resourcekey=0-tJifpXV_nnMZoJFQ7Lnwjw",
        Roadmap: "https://roadmap.sh/aws",
        papers: "https://staloysiuscollege.ac.in/en-in/wp-content/uploads/2020/04/Question-Bank-cloud-computing.pdf"
    },
    "Computer Network": {
        notes: "https://drive.google.com/file/d/0B0pxQPeJEFH4clRqUkw3LS1LeHc/view?resourcekey=0-9urx8VlHUqvVfFcoOBCO1A",
        Roadmap: "https://www.cs.toronto.edu/~bor/199y09/internet-introduction.pdf",
        papers: "https://www.manaresults.co.in/download1.php?id=RT41042032021.pdf&subcode=RT41042"
    },
    "Data Science": {
        notes: "https://www.geeksforgeeks.org/data-science-for-beginners/",
        Roadmap: "https://www.geeksforgeeks.org/data-scientist-roadmap/",
        papers: "https://srmvalliammai.ac.in/wp-content/uploads/2022/05/1904607-data-science.pdf"
    },
    "J2EE": {
        notes: "https://www.scribd.com/document/218091496/J2EE-Full-Notes",
        Roadmap: "https://www.learnquest.com/cgi-bin/visioroadmaps/LearnQuest%20Java%20J2EE%20Roadmap.pdf",
        papers: "https://www.scribd.com/document/535251170/Advanced-Java-and-J2EE-Question-Bank-2021"
    }
};

// Function to check login credentials
function checkCredentials(email, password) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@rlsbca\.edu\.in$/;
    return emailPattern.test(email) && password === "rlsbca123";
}

// Function to show a specific section and hide others
function showSection(sectionId) {
    const loggedIn = localStorage.getItem('loggedIn') === 'true';
    const sections = document.querySelectorAll('.content-section');

    if ((sectionId === 'courses' || sectionId === 'subject-resources' || sectionId === 'wifi-passwords') && !loggedIn) {
        alert('You need to log in to access this section.');
        document.getElementById('login').style.display = 'flex'; // Show login section and ensure it is centered
        sections.forEach(section => section.style.display = 'none'); // Hide other sections
        return;
    }

    sections.forEach(section => {
        section.style.display = section.id === sectionId ? 'block' : 'none';
        if (sectionId === 'home' || sectionId === 'purpose' || sectionId === 'contact') {
            section.style.textAlign = 'center'; // Center text for Home, Purpose, and Contact sections
        }
    });

    if (sectionId === 'login') {
        document.getElementById('login').style.display = 'flex';
    }
}

// Function to display subject resources
function displaySubjectResources() {
    const subjectResourcesSection = document.getElementById('subject-resources');
    subjectResourcesSection.innerHTML = '<h2>Study Material</h2>';

    Object.keys(studyMaterials).forEach(subject => {
        const subjectDiv = document.createElement('div');
        subjectDiv.classList.add('subject');

        const subjectTitle = document.createElement('h3');
        subjectTitle.textContent = subject;
        subjectDiv.appendChild(subjectTitle);

        // Create the Notes link
        const notesLink = document.createElement('a');
        notesLink.href = studyMaterials[subject].notes;
        notesLink.textContent = 'Notes';
        notesLink.target = '_blank';
        subjectDiv.appendChild(notesLink);

        // Create the Roadmap link
        const roadmapLink = document.createElement('a');
        roadmapLink.href = studyMaterials[subject].Roadmap;
        roadmapLink.textContent = 'Roadmap';
        roadmapLink.target = '_blank';
        subjectDiv.appendChild(roadmapLink);

        // Create the Papers link
        const papersLink = document.createElement('a');
        papersLink.href = studyMaterials[subject].papers;
        papersLink.textContent = 'Papers';
        papersLink.target = '_blank';
        subjectDiv.appendChild(papersLink);

        // Add line breaks for better readability
        subjectDiv.appendChild(document.createElement('br'));
        subjectDiv.appendChild(notesLink);
        subjectDiv.appendChild(document.createElement('br'));
        subjectDiv.appendChild(roadmapLink);
        subjectDiv.appendChild(document.createElement('br'));
        subjectDiv.appendChild(papersLink);
        subjectDiv.appendChild(document.createElement('br'));

        subjectResourcesSection.appendChild(subjectDiv);
    });
}

// Event listeners for navigation
document.getElementById('nav-home').addEventListener('click', () => showSection('home'));
document.getElementById('nav-purpose').addEventListener('click', () => showSection('purpose'));
document.getElementById('nav-contact').addEventListener('click', () => showSection('contact'));
document.getElementById('nav-courses').addEventListener('click', () => showSection('courses'));
document.getElementById('nav-subject-resources').addEventListener('click', () => showSection('subject-resources'));
document.getElementById('nav-wifi').addEventListener('click', () => showSection('wifi-passwords'));
document.getElementById('nav-login').addEventListener('click', () => showSection('login'));
document.getElementById('logoutButton').addEventListener('click', logout);

// Handle login
document.getElementById('loginButton').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const loginMessage = document.getElementById('loginMessage');
    loginMessage.textContent = ''; // Clear previous login message

    if (checkCredentials(email, password)) {
        localStorage.setItem('loggedIn', 'true');
        document.getElementById('login').style.display = 'none'; // Hide login section
        document.getElementById('nav-login').style.display = 'none'; // Hide login nav item
        document.getElementById('logoutButton').style.display = 'inline'; // Show logout button
        displaySubjectResources(); // Display subject resources after successful login
        showSection('subject-resources'); // Show subject resources section
    } else {
        loginMessage.textContent = 'Invalid credentials. Please try again.';
        loginMessage.style.color = 'red';
    }
});

// Logout function
function logout() {
    localStorage.removeItem('loggedIn');
    document.getElementById('logoutButton').style.display = 'none'; // Hide logout button
    document.getElementById('nav-login').style.display = 'inline'; // Show login nav item
    showSection('login'); // Show login section on logout
}

// Initial display
showSection('home'); // Show home section by default

// Display subject resources if already logged in
if (localStorage.getItem('loggedIn') === 'true') {
    document.getElementById('login').style.display = 'none'; // Hide login section
    document.getElementById('nav-login').style.display = 'none'; // Hide login nav item
    document.getElementById('logoutButton').style.display = 'inline'; // Show logout button
    displaySubjectResources();
    showSection('subject-resources'); // Show subject resources section
}
