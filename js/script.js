const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxHPzq0UR-GoWFrQ0d8Xq8t4Enomk347qtRCYu6uMCABRUgcjkhNj1cVpdpHcDFD4EFIQ/exec';

const questions = [
    {
        id: 1,
        text: "1️) O que você mais gosta de fazer na escola?",
        options: [
            { value: 'A', text: 'Montar ou construir coisas' },
            { value: 'B', text: 'Usar computador, celular ou tecnologia' },
            { value: 'C', text: 'Criar, desenhar ou inventar ideias' },
            { value: 'D', text: 'Fazer experimentos ou descobrir como algo funciona' },
            { value: 'E', text: 'Apresentar trabalhos ou liderar grupos' }
        ]
    },
    {
        id: 2,
        text: "2️) Em um trabalho em grupo, qual papel combina mais com você?",
        options: [
            { value: 'A', text: 'Cuidar da parte prática e montagem' },
            { value: 'B', text: 'Ajudar com tecnologia, vídeos ou programação' },
            { value: 'C', text: 'Criar o visual, cartaz ou design' },
            { value: 'D', text: 'Pesquisar informações e organizar dados' },
            { value: 'E', text: 'Organizar o grupo e apresentar o trabalho' }
        ]
    },
    {
        id: 3,
        text: "3️) Quando o professor propõe um desafio, você prefere:",
        options: [
            { value: 'A', text: 'Poder colocar a mão na massa' },
            { value: 'B', text: 'Poder usar tecnologia para resolver' },
            { value: 'C', text: 'Poder criar algo diferente' },
            { value: 'D', text: 'Poder investigar e testar hipóteses' },
            { value: 'E', text: 'Poder trabalhar e discutir em grupo' }
        ]
    },
    {
        id: 4,
        text: "4️) Qual dessas atividades você escolheria primeiro?",
        options: [
            { value: 'A', text: 'Construir uma maquete ou protótipo' },
            { value: 'B', text: 'Criar um jogo, site ou programa simples' },
            { value: 'C', text: 'Criar um cartaz, vídeo ou história' },
            { value: 'D', text: 'Fazer uma experiência científica' },
            { value: 'E', text: 'Apresentar um projeto para a turma' }
        ]
    },
    {
        id: 5,
        text: "5️) Quando algo não dá certo, você costuma:",
        options: [
            { value: 'A', text: 'Tentar montar de outro jeito' },
            { value: 'B', text: 'Procurar uma solução usando tecnologia' },
            { value: 'C', text: 'Pensar em uma ideia diferente' },
            { value: 'D', text: 'Testar até descobrir o erro' },
            { value: 'E', text: 'Conversar com o grupo para resolver' }
        ]
    },
    {
        id: 6,
        text: "6️) Em aulas diferentes do comum (STEAM), você se sente melhor quando:",
        options: [
            { value: 'A', text: 'Está construindo algo físico' },
            { value: 'B', text: 'Está usando computadores ou tablets' },
            { value: 'C', text: 'Está criando algo original' },
            { value: 'D', text: 'Está pesquisando e investigando' },
            { value: 'E', text: 'Está explicando ideias para os colegas' }
        ]
    },
    {
        id: 7,
        text: "7️) Qual frase mais combina com você?",
        options: [
            { value: 'A', text: '"Aprendo melhor fazendo"' },
            { value: 'B', text: '"Aprendo melhor usando tecnologia"' },
            { value: 'C', text: '"Aprendo melhor criando"' },
            { value: 'D', text: '"Aprendo melhor pesquisando"' },
            { value: 'E', text: '"Aprendo melhor conversando e explicando"' }
        ]
    },
    {
        id: 8,
        text: "8️) O que mais te chama atenção em um projeto longo?",
        options: [
            { value: 'A', text: 'A construção do projeto' },
            { value: 'B', text: 'As ferramentas digitais usadas' },
            { value: 'C', text: 'O visual e a criatividade' },
            { value: 'D', text: 'As descobertas feitas durante a pesquisa' },
            { value: 'E', text: 'O trabalho em equipe' }
        ]
    },
    {
        id: 9,
        text: "9️) Que tipo de atividade você mais gosta? (marque até 2)",
        multiple: true,
        options: [
            { value: 'A', text: 'Jogos e desafios práticos' },
            { value: 'B', text: 'Programação, robótica ou tecnologia' },
            { value: 'C', text: 'Desenho, vídeo ou criação digital' },
            { value: 'D', text: 'Experimentos e pesquisas científicas' },
            { value: 'E', text: 'Trabalhos em grupo e apresentações' }
        ]
    },
    {
        id: 10,
        text: "1️0) Imagine que a turma vai participar de uma feira de ciências ou tecnologia. O que você gostaria mais de fazer?",
        options: [
            { value: 'A', text: 'Ajudar a montar o experimento ou protótipo' },
            { value: 'B', text: 'Cuidar dos equipamentos, tecnologia ou programação' },
            { value: 'C', text: 'Criar o visual do estande, cartazes ou vídeos' },
            { value: 'D', text: 'Explicar como funciona o experimento e os resultados' },
            { value: 'E', text: 'Apresentar o projeto para o público' }
        ]
    }
];

const profiles = {
    'A': {
        name: 'MAKER',
        image: 'img/Maker.png',
        description: 'Você gosta de colocar a mão na massa, construir e experimentar. Prefere aprender fazendo e adora criar protótipos ou solucionar problemas práticos.'
    },
    'B': {
        name: 'TECNOLÓGICO',
        image: 'img/Tecnologico.png',
        description: 'Você adora tecnologia, programação e tudo que envolve inovação digital. Gosta de resolver desafios usando computadores e novas ferramentas.'
    },
    'C': {
        name: 'CRIATIVO',
        image: 'img/Criativo.png',
        description: 'Você tem uma mente criativa e adora expressar ideias de formas originais. Gosta de criar, inventar e pensar fora da caixa para resolver problemas.'
    },
    'D': {
        name: 'CIENTISTA',
        image: 'img/Cientista.png',
        description: 'Você tem um olhar investigativo, gosta de pesquisar, experimentar e entender como as coisas funcionam. Curte solucionar dúvidas e explorar novos conhecimentos.'
    },
    'E': {
        name: 'COMUNICADOR',
        image: 'img/Comunicador.png',
        description: 'Você se destaca pelo trabalho em equipe, por apresentar ideias e liderar grupos. Prefere aprender conversando, explicando ou orientando outros.'
    }
};

let studentName = '';
let studentClass = '';
let quizData = {};

function startQuiz() {
    const nome = document.getElementById('nome').value.trim();
    const turma = document.getElementById('turma').value.trim();
    
    let hasError = false;

    if (!nome) {
        document.getElementById('nome-error').style.display = 'block';
        hasError = true;
    } else {
        document.getElementById('nome-error').style.display = 'none';
    }

    if (!turma) {
        document.getElementById('turma-error').style.display = 'block';
        hasError = true;
    } else {
        document.getElementById('turma-error').style.display = 'none';
    }

    if (hasError) return;

    studentName = nome;
    studentClass = turma;

    document.getElementById('intro-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');

    document.getElementById('student-info').innerHTML = `
        <p><strong>Aluno:</strong> ${studentName}</p>
        <p><strong>Turma:</strong> ${studentClass}</p>
    `;

    renderQuestions();
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function renderQuestions() {
    const container = document.getElementById('questions-container');
    container.innerHTML = '';

    questions.forEach(q => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';

        let optionsHTML = '';
        const shuffledOptions = shuffleArray(q.options);

        shuffledOptions.forEach(opt => {        
            const inputType = q.multiple ? 'checkbox' : 'radio';
            const inputName = q.multiple ? `q${q.id}[]` : `q${q.id}`;
            
            optionsHTML += `
                <div class="option" onclick="selectOption(this, ${q.multiple})">
                    <input type="${inputType}" name="${inputName}" value="${opt.value}" id="q${q.id}_${opt.value}">
                    <label for="q${q.id}_${opt.value}">${opt.text}</label>
                </div>
            `;
        });

        questionDiv.innerHTML = `
            <div class="question-title">${q.text} ${q.multiple ? '<small style="color: #666;">(marque até 2)</small>' : ''}</div>
            ${optionsHTML}
        `;

        container.appendChild(questionDiv);
    });
}

function selectOption(element, isMultiple) {
    const input = element.querySelector('input');
    
    if (isMultiple) {
        const questionName = input.name;
        const checkedBoxes = document.querySelectorAll(`input[name="${questionName}"]:checked`);
        
        if (!input.checked && checkedBoxes.length >= 2) {
            alert('Você pode selecionar no máximo 2 opções!');
            return;
        }
        
        input.checked = !input.checked;
        if (input.checked) {
            element.classList.add('selected');
        } else {
            element.classList.remove('selected');
        }
    } else {
        const questionDiv = element.closest('.question');
        questionDiv.querySelectorAll('.option').forEach(opt => {
            opt.classList.remove('selected');
        });
        input.checked = true;
        element.classList.add('selected');
    }
}

async function calculateResult() {
    const answers = { A: 0, B: 0, C: 0, D: 0, E: 0 };
    quizData = {
        nome: studentName,
        turma: studentClass,
        data: new Date().toLocaleString('pt-BR'),
        respostas: []
    };

    try {
        questions.forEach((q, index) => {
            if (q.multiple) {
                const checked = document.querySelectorAll(`input[name="q${q.id}[]"]:checked`);
                if (checked.length === 0) {
                    alert(`Por favor, responda a pergunta ${q.id}`);
                    throw new Error('Incomplete');
                }
                const selectedValues = Array.from(checked).map(input => input.value);
                quizData.respostas.push(selectedValues.join(', '));
                checked.forEach(input => {
                    answers[input.value]++;
                });
            } else {
                const selected = document.querySelector(`input[name="q${q.id}"]:checked`);
                if (!selected) {
                    alert(`Por favor, responda a pergunta ${q.id}`);
                    throw new Error('Incomplete');
                }
                quizData.respostas.push(selected.value);
                answers[selected.value]++;
            }
        });

        const maxScore = Math.max(...Object.values(answers));
        const profileLetter = Object.keys(answers).find(key => answers[key] === maxScore);
        const profile = profiles[profileLetter];

        quizData.perfil = profile.name;

        document.getElementById('profile-icon').innerHTML =
        `<img src="${profile.image}" class="profile-image">`;    
        document.getElementById('profile-name').textContent = profile.name;
        document.getElementById('profile-description').textContent = profile.description;

        document.getElementById('quiz-screen').classList.add('hidden');
        document.getElementById('result-screen').classList.remove('hidden');

        // Enviar dados para Google Sheets
        await saveToGoogleSheets(quizData);

    } catch (error) {
        if (error.message !== 'Incomplete') {
            console.error('Erro:', error);
        }
    }
}

async function saveToGoogleSheets(data) {
    const saveMessage = document.getElementById('save-message');

    saveMessage.innerHTML = '<div style="color: #666; margin-top: 15px;">Salvando dados... <span class="loading"></span></div>';

    try {
        const response = await fetch(SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        saveMessage.innerHTML = '<div class="success-message">✅ Dados salvos com sucesso na planilha!</div>';
    } catch (error) {
        console.error('Erro ao salvar:', error);
        saveMessage.innerHTML = '<div style="background: #f8d7da; color: #721c24; padding: 15px; border-radius: 8px; margin-top: 15px; border: 1px solid #f5c6cb;">❌ Erro ao salvar. Verifique a configuração do script.</div>';
    }
}

function restartQuiz() {
    document.getElementById('result-screen').classList.add('hidden');
    document.getElementById('intro-screen').classList.remove('hidden');
    
    document.getElementById('nome').value = '';
    document.getElementById('turma').value = '';
    
    document.querySelectorAll('input[type="radio"], input[type="checkbox"]').forEach(input => {
        input.checked = false;
    });
    
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });

    document.getElementById('save-message').innerHTML = '';
}