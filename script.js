// script.js
// Part 1: JavaScript Basics - Variables, Conditionals
document.addEventListener('DOMContentLoaded', function() {
    // Get references to DOM elements
    const processBtn = document.getElementById('processBtn');
    const sumBtn = document.getElementById('sumBtn');
    const diffBtn = document.getElementById('diffBtn');
    const productBtn = document.getElementById('productBtn');
    const forLoopBtn = document.getElementById('forLoopBtn');
    const whileLoopBtn = document.getElementById('whileLoopBtn');
    const doWhileLoopBtn = document.getElementById('doWhileLoopBtn');
    const contentBtn = document.getElementById('contentBtn');
    const styleBtn = document.getElementById('styleBtn');
    const addItemBtn = document.getElementById('addItemBtn');
    const toggleElement = document.getElementById('toggleElement');
    const hoverElement = document.getElementById('hoverElement');

    // Part 1: JavaScript Basics
    processBtn.addEventListener('click', processInput);

    function processInput() {
        // Variable declarations
        const userInput = document.getElementById('userInput').value;
        const outputElement = document.getElementById('basicOutput');
        
        // Clear previous output
        outputElement.innerHTML = '';
        
        // Conditional statements
        if (userInput === '') {
            outputElement.textContent = 'Please enter a number.';
            return;
        }
        
        const number = parseFloat(userInput);
        let message = '';
        
        if (isNaN(number)) {
            message = 'That\'s not a valid number.';
        } else if (number > 100) {
            message = `Your number (${number}) is greater than 100.`;
        } else if (number < 0) {
            message = `Your number (${number}) is negative.`;
        } else if (number === 0) {
            message = 'Your number is zero.';
        } else {
            message = `Your number (${number}) is between 0 and 100.`;
        }
        
        // Output the result
        outputElement.textContent = message;
    }

    // Part 2: JavaScript Functions
    sumBtn.addEventListener('click', calculateSum);
    diffBtn.addEventListener('click', calculateDifference);
    productBtn.addEventListener('click', calculateProduct);

    // Function to parse input numbers
    function getInputNumbers() {
        const input = document.getElementById('functionInput').value;
        const numbers = input.split(',').map(num => parseFloat(num.trim()));
        
        if (numbers.length !== 2 || numbers.some(isNaN)) {
            alert('Please enter two valid numbers separated by a comma (e.g., 5, 3)');
            return null;
        }
        
        return numbers;
    }

    // Function to calculate sum
    function calculateSum() {
        const numbers = getInputNumbers();
        if (!numbers) return;
        
        const [a, b] = numbers;
        const result = a + b;
        
        displayFunctionResult(`Sum: ${a} + ${b} = ${result}`);
    }

    // Function to calculate difference
    function calculateDifference() {
        const numbers = getInputNumbers();
        if (!numbers) return;
        
        const [a, b] = numbers;
        const result = a - b;
        
        displayFunctionResult(`Difference: ${a} - ${b} = ${result}`);
    }

    // Function to calculate product
    function calculateProduct() {
        const numbers = getInputNumbers();
        if (!numbers) return;
        
        const [a, b] = numbers;
        const result = a * b;
        
        displayFunctionResult(`Product: ${a} × ${b} = ${result}`);
    }

    // Helper function to display function results
    function displayFunctionResult(message) {
        const outputElement = document.getElementById('functionOutput');
        outputElement.innerHTML = `<div class="function-result">${message}</div>`;
    }

    // Part 3: JavaScript Loops
    forLoopBtn.addEventListener('click', runForLoop);
    whileLoopBtn.addEventListener('click', runWhileLoop);
    doWhileLoopBtn.addEventListener('click', runDoWhileLoop);

    function runForLoop() {
        const input = document.getElementById('loopInput').value;
        const iterations = parseInt(input);
        const outputElement = document.getElementById('loopOutput');
        
        if (isNaN(iterations) || iterations < 1) {
            outputElement.textContent = 'Please enter a valid number greater than 0.';
            return;
        }
        
        let output = '<p>For loop results:</p><ul>';
        
        // For loop example
        for (let i = 1; i <= iterations; i++) {
            output += `<li>Iteration ${i}</li>`;
        }
        
        output += '</ul>';
        outputElement.innerHTML = output;
    }

    function runWhileLoop() {
        const input = document.getElementById('loopInput').value;
        const iterations = parseInt(input);
        const outputElement = document.getElementById('loopOutput');
        
        if (isNaN(iterations) || iterations < 1) {
            outputElement.textContent = 'Please enter a valid number greater than 0.';
            return;
        }
        
        let output = '<p>While loop results:</p><ul>';
        let i = 1;
        
        // While loop example
        while (i <= iterations) {
            output += `<li>Iteration ${i}</li>`;
            i++;
        }
        
        output += '</ul>';
        outputElement.innerHTML = output;
    }

    function runDoWhileLoop() {
        const input = document.getElementById('loopInput').value;
        const iterations = parseInt(input);
        const outputElement = document.getElementById('loopOutput');
        
        if (isNaN(iterations) || iterations < 1) {
            outputElement.textContent = 'Please enter a valid number greater than 0.';
            return;
        }
        
        let output = '<p>Do-while loop results:</p><ul>';
        let i = 1;
        
        // Do-while loop example
        do {
            output += `<li>Iteration ${i}</li>`;
            i++;
        } while (i <= iterations);
        
        output += '</ul>';
        outputElement.innerHTML = output;
    }

    // Part 4: DOM Manipulation
    contentBtn.addEventListener('click', changeContent);
    styleBtn.addEventListener('click', changeStyles);
    addItemBtn.addEventListener('click', addListItem);
    toggleElement.addEventListener('click', function() {
        toggleHighlight(this);
    });
    hoverElement.addEventListener('mouseover', function() {
        scaleUp(this);
    });
    hoverElement.addEventListener('mouseout', function() {
        scaleDown(this);
    });

    function changeContent() {
        const contentElement = document.getElementById('contentToChange');
        const messages = [
            "You've changed the content!",
            "JavaScript is powerful!",
            "DOM manipulation is fun!",
            "You can create dynamic web pages!"
        ];
        
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        contentElement.textContent = randomMessage;
    }

    function changeStyles() {
        const colorBox = document.getElementById('colorBox');
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9c74f', '#ffafcc'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        colorBox.style.backgroundColor = randomColor;
        colorBox.style.borderRadius = Math.floor(Math.random() * 30) + 'px';
        colorBox.style.transform = `scale(${0.8 + Math.random() * 0.4})`;
    }

    function addListItem() {
        const itemList = document.getElementById('itemList');
        const newItem = document.createElement('li');
        
        newItem.className = 'list-item';
        newItem.textContent = `Item ${itemList.children.length + 1} (added at ${new Date().toLocaleTimeString()})`;
        
        itemList.appendChild(newItem);
    }

    function toggleHighlight(element) {
        element.classList.toggle('highlighted');
        
        if (element.classList.contains('highlighted')) {
            element.style.backgroundColor = '#ffd166';
            element.style.color = '#000';
            element.textContent = 'I am highlighted!';
        } else {
            element.style.backgroundColor = '#5e60ce';
            element.style.color = '#fff';
            element.textContent = 'Click me to toggle highlight!';
        }
    }

    function scaleUp(element) {
        element.style.transform = 'scale(1.05)';
        element.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
    }

    function scaleDown(element) {
        element.style.transform = 'scale(1)';
        element.style.boxShadow = 'none';
    }
});