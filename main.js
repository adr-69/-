function back() {
    mainpage();
}
function n() {
  alert('Under Development.');
}
function mainpage() {
    const mainpage = `
<div class="mainpage">
  <div class="mainpage-body">
    <h1>Learning Materials</h1>
    <p>With Highest Soon!</p>
    <button class="topicBTN" onclick="oralCom()">Oral Communication in Context</button>
    <button class="topicBTN" onclick="empTech()">Empowerment Technologies</button>
    <button class="topicBTN" onclick="genMath()">General Mathematics</button>
    <button class="topicBTN" onclick="n()">Fundamentals of Computer</button>
    <button class="topicBTN" onclick="n()">Personal Development</button>
    <button class="topicBTN" onclick="n()">Komunikasyon (Pilipino)</button>
    <button class="topicBTN" onclick="n()">PROGRAMMING 1 - Design Program Logic</button>
    <button class="topicBTN" onclick="n()">Earth & Life Science</button>
    <button class="topicBTN" onclick="n()">PE & Health (HOPE 1)</button>
  </div>
</div>
    `;
    document.getElementById('bodypage').innerHTML = mainpage;
}
function genMath() {
  const genMath = `
<div class="bodypage">
<div class="topic">
  <button class="backBTN" onclick="back()">BACK</button>
  <h1>General Mathematics</h1>
  <h3>Grade 11 - 1st Semester</h3>
  <h3>Unit 1: Functions and Their Graphs</h3>
  <hr />
  <h2>Lesson 1: Definitions and Types of Functions</h2>
  <h4>Learning Objectives:</h4>
  <ul>
    <li>Define a function and distinguish it from general relations.</li>
    <li>Identify different types of mathematical functions.</li>
    <li>Use function notation correctly and represent functions in multiple forms.</li>
  </ul>
  <h4>What is a Function?</h4>
  <p>
    A <strong>function</strong> is a special relationship where each input (x-value) has exactly one output (y-value). It maps elements from a domain to a range in such a way that no input is assigned to more than one output.
  </p>
  <h4>Example of a Function:</h4>
  <table border="1" cellpadding="8">
    <tr>
      <th>Input (x)</th>
      <th>Output (f(x))</th>
    </tr>
    <tr>
      <td>1</td>
      <td>2</td>
    </tr>
    <tr>
      <td>2</td>
      <td>4</td>
    </tr>
    <tr>
      <td>3</td>
      <td>6</td>
    </tr>
  </table>
  <p>Each input has one output → ✔️ This is a function.</p>
  <h4>Not a Function:</h4>
  <p>If a single input corresponds to multiple outputs, it is <strong>not</strong> a function.</p>
  <pre>
Input: 1 → 2  
       1 → 3  
→ ❌ Not a function
  </pre>
  <h4>Function Notation:</h4>
  <p>
    A function is usually written as <code>f(x)</code>, which means "function of x."  
    Example: <code>f(x) = 2x + 1</code> means for every value of x, multiply by 2 and add 1.
  </p>
  <h4>Ways to Represent Functions:</h4>
  <ul>
    <li>Set of ordered pairs: <code>{(1,2), (2,4), (3,6)}</code></li>
    <li>Table of values</li>
    <li>Mapping diagram</li>
    <li>Graph on a coordinate plane</li>
    <li>Algebraic equation</li>
  </ul>
  <h4>Vertical Line Test:</h4>
  <p>
    A graph represents a function if no vertical line intersects it at more than one point.  
    This is called the <strong>vertical line test</strong>.
  </p>
  <h4>Types of Functions:</h4>
  <ul>
    <li><strong>Linear Function:</strong> Graph is a straight line (e.g., <code>f(x) = 3x + 2</code>)</li>
    <li><strong>Quadratic Function:</strong> Graph is a parabola (e.g., <code>f(x) = x² - 1</code>)</li>
    <li><strong>Absolute Value Function:</strong> Graph is a V-shape (e.g., <code>f(x) = |x|</code>)</li>
    <li><strong>Piecewise Function:</strong> Defined by different expressions depending on input value</li>
    <li><strong>Constant Function:</strong> Always returns the same value (e.g., <code>f(x) = 5</code>)</li>
  </ul>
  <h4>Examples in Daily Life:</h4>
  <table border="1" cellpadding="8">
    <tr>
      <th>Situation</th>
      <th>Function?</th>
      <th>Explanation</th>
    </tr>
    <tr>
      <td>Each student has one ID number</td>
      <td>Yes</td>
      <td>1 student = 1 ID → Function</td>
    </tr>
    <tr>
      <td>1 ID number belongs to multiple students</td>
      <td>No</td>
      <td>1 input → many outputs → Not a function</td>
    </tr>
    <tr>
      <td>Price of an item based on weight</td>
      <td>Yes</td>
      <td>Each weight has a set price</td>
    </tr>
  </table>
  <h4>Key Reminders:</h4>
  <ul>
    <li>All functions are relations, but not all relations are functions.</li>
    <li>Check each input for multiple outputs — that breaks a function.</li>
    <li>Functions can be visual, verbal, algebraic, or tabular.</li>
    <li>Use function notation to simplify mathematical writing.</li>
  </ul>
  <h4>Summary:</h4>
  <p>
    A function is a mathematical rule that assigns a single output to each input. Understanding the types, representations, and behavior of functions is the foundation for studying algebra and higher-level math concepts.
  </p>
</div>
<div class="topic">
  <h2>Lesson 2: Domain and Range</h2>
  <h4>Learning Objectives:</h4>
  <ul>
    <li>Define and determine the domain and range of a function.</li>
    <li>Identify restrictions in the domain based on the function's rule.</li>
    <li>Represent domain and range in set, inequality, and interval notation.</li>
  </ul>
  <h4>What is Domain?</h4>
  <p>
    The <strong>domain</strong> of a function is the set of all possible input values (x-values) for which the function is defined. These are the values you can plug into the function without breaking any mathematical rule (like dividing by zero or taking the square root of a negative number).
  </p>
  <h4>What is Range?</h4>
  <p>
    The <strong>range</strong> is the set of all possible output values (y-values) that result from using the values in the domain. It represents what the function produces.
  </p>
  <h4>Example 1:</h4>
  <p><code>f(x) = x + 3</code></p>
  <ul>
    <li>Domain: All real numbers (ℝ) — you can plug in any number.</li>
    <li>Range: All real numbers (ℝ) — the output can be any number too.</li>
  </ul>
  <h4>Example 2:</h4>
  <p><code>f(x) = 1 / (x - 2)</code></p>
  <ul>
    <li>You cannot divide by 0, so x cannot be 2.</li>
    <li><strong>Domain:</strong> All real numbers except 2 → <code>x ≠ 2</code></li>
    <li><strong>Range:</strong> All real numbers except 0 (the output will never be 0)</li>
  </ul>
  <h4>Example 3:</h4>
  <p><code>f(x) = √(x - 1)</code></p>
  <ul>
    <li>You cannot take the square root of a negative number (in real numbers).</li>
    <li><strong>Domain:</strong> x ≥ 1</li>
    <li><strong>Range:</strong> y ≥ 0</li>
  </ul>
  <h4>Ways to Express Domain and Range:</h4>
  <ul>
    <li><strong>Set Notation:</strong> D = {x | x ≠ 2}</li>
    <li><strong>Inequality:</strong> x > 0, x ≤ 5, etc.</li>
    <li><strong>Interval Notation:</strong>
      <ul>
        <li><code>(−∞, ∞)</code> → all real numbers</li>
        <li><code>[1, ∞)</code> → from 1 to infinity, including 1</li>
        <li><code>(−∞, 0)</code> → less than 0, excluding 0</li>
      </ul>
    </li>
  </ul>
  <h4>Visual Example (Table):</h4>
  <table border="1" cellpadding="8">
    <tr>
      <th>Function</th>
      <th>Domain</th>
      <th>Range</th>
    </tr>
    <tr>
      <td><code>f(x) = x²</code></td>
      <td>All real numbers</td>
      <td>y ≥ 0</td>
    </tr>
    <tr>
      <td><code>f(x) = 1/x</code></td>
      <td>x ≠ 0</td>
      <td>y ≠ 0</td>
    </tr>
    <tr>
      <td><code>f(x) = √x</code></td>
      <td>x ≥ 0</td>
      <td>y ≥ 0</td>
    </tr>
  </table>
  <h4>Real-Life Applications:</h4>
  <ul>
    <li><strong>Fuel Consumption:</strong> The domain could be distance (can’t be negative), and the range could be fuel used.</li>
    <li><strong>Bank Account:</strong> You can’t withdraw more than your balance → range is limited by your account.</li>
  </ul>
  <h4>Key Reminders:</h4>
  <ul>
    <li>Check for restrictions like square roots and denominators when finding domain.</li>
    <li>Use graphs to help visualize the range.</li>
    <li>Always answer using the appropriate notation: set, interval, or inequality.</li>
  </ul>

  <h4>Summary:</h4>
  <p>
    The domain and range of a function define the limits of its input and output. They are essential in understanding where a function is valid and what it can produce. Being able to identify and express these helps in interpreting real-world situations mathematically.
  </p>
</div>
<div class="topic">
  <h2>Lesson 3: Evaluating Functions</h2>
  <h4>Learning Objectives:</h4>
  <ul>
    <li>Substitute input values into function expressions.</li>
    <li>Correctly evaluate the value of a function for a given input.</li>
    <li>Apply function evaluation in real-life word problems.</li>
  </ul>
  <h4>What Does it Mean to Evaluate a Function?</h4>
  <p>
    To <strong>evaluate a function</strong> means to substitute a specific value for the variable (usually x) in the function and then simplify the expression to find the output (f(x)).
  </p>
  <h4>Function Notation Review:</h4>
  <p>
    Function notation is written as <code>f(x)</code>, which means "the function of x".  
    Example: <code>f(x) = 3x + 2</code>  
    This means: take any value of x, multiply it by 3, and then add 2.
  </p>
  <h4>Example 1:</h4>
  <p>Given: <code>f(x) = 2x + 5</code></p>
  <ul>
    <li>Find <code>f(3)</code></li>
    <li>Solution: <code>f(3) = 2(3) + 5 = 6 + 5 = 11</code></li>
    <li>Answer: <code>f(3) = 11</code></li>
  </ul>
  <h4>Example 2:</h4>
  <p>Given: <code>g(x) = x² - 4x + 1</code></p>
  <ul>
    <li>Find <code>g(2)</code></li>
    <li>Solution: <code>g(2) = (2)² - 4(2) + 1 = 4 - 8 + 1 = -3</code></li>
    <li>Answer: <code>g(2) = -3</code></li>
  </ul>
  <h4>Example 3:</h4>
  <p>Given: <code>h(x) = √(x + 1)</code></p>
  <ul>
    <li>Find <code>h(8)</code></li>
    <li>Solution: <code>h(8) = √(8 + 1) = √9 = 3</code></li>
    <li>Answer: <code>h(8) = 3</code></li>
  </ul>
  <h4>Real-Life Problem Example:</h4>
  <p>A delivery fee function is defined as <code>d(x) = 45 + 8x</code>, where x is the number of kilometers traveled.</p>
  <ul>
    <li>How much will it cost to deliver over 5 kilometers?</li>
    <li>Solution: <code>d(5) = 45 + 8(5) = 45 + 40 = 85</code></li>
    <li>Answer: The delivery cost is ₱85</li>
  </ul>
  <h4>Practice Table:</h4>
  <table border="1" cellpadding="8">
    <tr>
      <th>Function</th>
      <th>Input (x)</th>
      <th>f(x)</th>
    </tr>
    <tr>
      <td><code>f(x) = x²</code></td>
      <td>4</td>
      <td>16</td>
    </tr>
    <tr>
      <td><code>g(x) = 2x - 1</code></td>
      <td>10</td>
      <td>19</td>
    </tr>
    <tr>
      <td><code>h(x) = x/3</code></td>
      <td>9</td>
      <td>3</td>
    </tr>
  </table>
  <h4>Common Mistakes to Avoid:</h4>
  <ul>
    <li>Forgetting to use parentheses when substituting negative values</li>
    <li>Not applying exponents before multiplication</li>
    <li>Confusing the function name with multiplication (e.g., <code>f(x)</code> is not "f times x")</li>
  </ul>
  <h4>Key Reminders:</h4>
  <ul>
    <li>Always replace x with the given number and follow PEMDAS rules.</li>
    <li>Use a calculator for complex values or decimal results.</li>
    <li>Make sure the value is within the domain of the function before evaluating.</li>
  </ul>
  <h4>Summary:</h4>
  <p>
    Evaluating a function means plugging in values and simplifying to find the result. This helps in real-world applications like cost, time, population, and profit computations. Mastery of this skill is essential in using functions effectively.
  </p>
</div>
<div class="topic">
  <h2>Lesson 4: Piecewise Functions</h2>
  <h4>Learning Objectives:</h4>
  <ul>
    <li>Understand the concept and definition of piecewise functions.</li>
    <li>Interpret and evaluate piecewise-defined functions.</li>
    <li>Graph piecewise functions based on their rules and domains.</li>
  </ul>
  <h4>What is a Piecewise Function?</h4>
  <p>
    A <strong>piecewise function</strong> is a function that is defined by different expressions or rules for different parts of its domain. Each "piece" of the function applies only to specific values of the input.
  </p>
  <h4>Real-Life Analogy:</h4>
  <p>
    Think of delivery fees where different pricing rules apply depending on distance. For example:  
    - For 0–5 km: ₱50  
    - For 6–10 km: ₱70  
    - For 11+ km: ₱100  
    Each range has its own rule — that’s how a piecewise function works.
  </p>
  <h4>Example of a Piecewise Function:</h4>
  <pre>
f(x) = {
  x + 2   if x &lt; 0  
  x²      if 0 ≤ x ≤ 3  
  5       if x &gt; 3
}
  </pre>
  <h4>How to Evaluate Piecewise Functions:</h4>
  <p>
    Step 1: Look at the value of x.  
    Step 2: Determine which piece of the function applies to that x-value.  
    Step 3: Plug the value into the correct equation.
  </p>
  <h4>Example:</h4>
  <pre>
Given:
f(x) = {
  x + 2   if x &lt; 0  
  x²      if 0 ≤ x ≤ 3  
  5       if x &gt; 3
}
Find f(-2), f(2), f(4)
→ f(-2): Use x + 2 → f(-2) = -2 + 2 = 0  
→ f(2): Use x² → f(2) = 2² = 4  
→ f(4): Use 5 → f(4) = 5
  </pre>
  <h4>Graphing a Piecewise Function:</h4>
  <p>
    - Graph each equation separately over its given interval.<br>
    - Use <strong>open circle</strong> (○) if the endpoint is not included.<br>
    - Use <strong>closed circle</strong> (●) if the endpoint is included.
  </p>
  <h4>Visual Example (Table):</h4>
  <table border="1" cellpadding="8">
    <tr>
      <th>x</th>
      <th>f(x)</th>
      <th>Which Rule?</th>
    </tr>
    <tr>
      <td>-3</td>
      <td>-1</td>
      <td>x + 2</td>
    </tr>
    <tr>
      <td>1</td>
      <td>1</td>
      <td>x²</td>
    </tr>
    <tr>
      <td>5</td>
      <td>5</td>
      <td>Constant 5</td>
    </tr>
  </table>
  <h4>Common Applications:</h4>
  <ul>
    <li>Tax computations (different rates for income ranges)</li>
    <li>Shipping fees by distance or weight</li>
    <li>Speed regulations (e.g., school zone rules)</li>
  </ul>
  <h4>Key Reminders:</h4>
  <ul>
    <li>Only one rule applies for each input.</li>
    <li>Check the inequality symbols carefully (≤, &lt;, ≥, &gt;).</li>
    <li>Use tables to organize values when graphing.</li>
  </ul>
  <h4>Summary:</h4>
  <p>
    Piecewise functions use different rules for different parts of the domain. These are used in real-world situations with step-based pricing or rules. Understanding how to evaluate and graph them is essential in applying math to practical situations.
  </p>
</div>
<div class="topic">
  <h2>Lesson 5: Graphs of Functions</h2>
  <h4>Learning Objectives:</h4>
  <ul>
    <li>Identify the graphical representation of common functions.</li>
    <li>Plot and analyze the shape and characteristics of different types of functions.</li>
    <li>Interpret key features of a function's graph such as intercepts, domain, range, and symmetry.</li>
  </ul>
  <h4>What is a Graph of a Function?</h4>
  <p>
    A function’s graph is a visual representation of all the ordered pairs (x, f(x)) that satisfy the function. It allows us to see the behavior of a function — how it increases or decreases, where it intercepts the axes, and whether it is linear, quadratic, or otherwise.
  </p>
  <h4>Common Function Graphs:</h4>
  <ul>
    <li><strong>Linear Function:</strong> <code>f(x) = mx + b</code>  
      - Graph: A straight line  
      - m = slope, b = y-intercept  
      - Domain and range: All real numbers</li>
    <li><strong>Quadratic Function:</strong> <code>f(x) = ax² + bx + c</code>  
      - Graph: A parabola  
      - Opens upward if a > 0, downward if a < 0  
      - Vertex is the highest or lowest point</li>
    <li><strong>Absolute Value Function:</strong> <code>f(x) = |x|</code>  
      - Graph: A "V" shape  
      - Vertex at origin (0,0)  
      - Symmetric about the y-axis</li>
    <li><strong>Constant Function:</strong> <code>f(x) = c</code>  
      - Graph: A horizontal line  
      - y-value is constant regardless of x</li>
  </ul>
  <h4>Key Features of Graphs:</h4>
  <ul>
    <li><strong>X-intercept:</strong> Point where the graph crosses the x-axis (f(x) = 0)</li>
    <li><strong>Y-intercept:</strong> Point where the graph crosses the y-axis (x = 0)</li>
    <li><strong>Symmetry:</strong> Is the graph mirrored about the y-axis or origin?</li>
    <li><strong>End behavior:</strong> What happens to f(x) as x → ±∞?</li>
    <li><strong>Intervals:</strong> Where is the function increasing or decreasing?</li>
  </ul>
  <h4>Example: Graph of f(x) = 2x + 1</h4>
  <ul>
    <li>This is a linear function.</li>
    <li>Slope (m) = 2, Y-intercept (b) = 1</li>
    <li>Graph passes through (0,1) and rises 2 units for every 1 unit increase in x</li>
  </ul>
  <h4>Example: Graph of f(x) = x² - 4</h4>
  <ul>
    <li>This is a quadratic function (parabola).</li>
    <li>Vertex: (0, -4)</li>
    <li>Opens upward</li>
    <li>X-intercepts: Solve x² - 4 = 0 → x = ±2</li>
  </ul>
  <h4>Graphing Tips:</h4>
  <ul>
    <li>Make a table of values for x and calculate f(x)</li>
    <li>Plot at least 5 points to get an accurate shape</li>
    <li>Check symmetry (especially for parabolas or absolute values)</li>
    <li>Label axes and intercepts clearly</li>
  </ul>
  <h4>Graph Interpretation Practice Table:</h4>
  <table border="1" cellpadding="8">
    <tr>
      <th>Function</th>
      <th>Type</th>
      <th>Graph Shape</th>
    </tr>
    <tr>
      <td><code>f(x) = x</code></td>
      <td>Linear</td>
      <td>Straight Line</td>
    </tr>
    <tr>
      <td><code>f(x) = x²</code></td>
      <td>Quadratic</td>
      <td>Parabola</td>
    </tr>
    <tr>
      <td><code>f(x) = |x|</code></td>
      <td>Absolute Value</td>
      <td>V-shape</td>
    </tr>
    <tr>
      <td><code>f(x) = 5</code></td>
      <td>Constant</td>
      <td>Horizontal Line</td>
    </tr>
  </table>
  <h4>Common Mistakes to Avoid:</h4>
  <ul>
    <li>Forgetting to use enough points when plotting</li>
    <li>Incorrect placement of intercepts or vertex</li>
    <li>Confusing shape of different functions (e.g., linear vs. quadratic)</li>
  </ul>
  <h4>Summary:</h4>
  <p>
    Graphs provide a powerful way to visualize functions and understand their behavior. Knowing how to identify, plot, and analyze function graphs helps in problem-solving, data interpretation, and modeling real-life scenarios.
  </p>
</div>
<div class="topic">
  <h2>Lesson 6: Transformations of Functions</h2>
  <h4>Learning Objectives:</h4>
  <ul>
    <li>Identify and describe different types of transformations on function graphs.</li>
    <li>Apply transformations such as translations, reflections, and scaling to function equations.</li>
    <li>Sketch graphs of transformed functions.</li>
  </ul>
  <h4>What are Transformations of Functions?</h4>
  <p>
    Transformations are changes made to the graph of a function. These changes can move the graph up, down, left, or right; flip it over an axis; or stretch/compress it.
  </p>
  <h4>Types of Transformations:</h4>
  <ul>
    <li><strong>Translation:</strong> Shifting the graph without changing its shape.</li>
    <li><strong>Reflection:</strong> Flipping the graph across an axis.</li>
    <li><strong>Stretch/Compression (Scaling):</strong> Making the graph taller, shorter, wider, or narrower.</li>
  </ul>
  <h4>1. Translations</h4>
  <ul>
    <li><strong>Vertical Shift:</strong> <code>f(x) + c</code> moves the graph up if c > 0, down if c < 0</li>
    <li><strong>Horizontal Shift:</strong> <code>f(x − c)</code> moves the graph right if c > 0, left if c < 0</li>
  </ul>
  <h4>Example:</h4>
  <ul>
    <li><code>f(x) = x²</code> → original parabola</li>
    <li><code>f(x) = x² + 3</code> → moves up 3 units</li>
    <li><code>f(x) = (x − 2)²</code> → moves right 2 units</li>
  </ul>
  <h4>2. Reflections</h4>
  <ul>
    <li><strong>Over x-axis:</strong> <code>−f(x)</code> → flips the graph upside down</li>
    <li><strong>Over y-axis:</strong> <code>f(−x)</code> → mirrors the graph left to right</li>
  </ul>
  <h4>Example:</h4>
  <ul>
    <li><code>f(x) = x³</code></li>
    <li><code>−f(x) = −x³</code> → reflected over x-axis</li>
    <li><code>f(−x) = (−x)³ = −x³</code> → also reflects over y-axis</li>
  </ul>
  <h4>3. Vertical & Horizontal Stretch/Compression</h4>
  <ul>
    <li><strong>Vertical Stretch:</strong> <code>a · f(x)</code> where a > 1 → graph becomes taller</li>
    <li><strong>Vertical Compression:</strong> <code>a · f(x)</code> where 0 < a < 1 → graph becomes shorter</li>
    <li><strong>Horizontal Stretch/Compression:</strong> <code>f(bx)</code> where b > 1 compresses, 0 < b < 1 stretches</li>
  </ul>
  <h4>Example:</h4>
  <ul>
    <li><code>f(x) = x²</code></li>
    <li><code>2f(x) = 2x²</code> → vertical stretch (taller parabola)</li>
    <li><code>0.5f(x) = 0.5x²</code> → vertical compression (wider parabola)</li>
    <li><code>f(2x) = (2x)² = 4x²</code> → horizontal compression</li>
  </ul>
  <h4>Combined Transformations:</h4>
  <p>
    Multiple transformations can be combined in one function.<br>
    Example: <code>y = −2(x − 3)² + 1</code>
  </p>
  <ul>
    <li>Shift right 3 units</li>
    <li>Reflect over x-axis</li>
    <li>Vertical stretch by 2</li>
    <li>Shift up 1 unit</li>
  </ul>
  <h4>Quick Transformation Table:</h4>
  <table border="1" cellpadding="8">
    <tr>
      <th>Equation</th>
      <th>Transformation</th>
    </tr>
    <tr>
      <td><code>f(x) + 4</code></td>
      <td>Up 4 units</td>
    </tr>
    <tr>
      <td><code>f(x − 3)</code></td>
      <td>Right 3 units</td>
    </tr>
    <tr>
      <td><code>−f(x)</code></td>
      <td>Reflect over x-axis</td>
    </tr>
    <tr>
      <td><code>f(−x)</code></td>
      <td>Reflect over y-axis</td>
    </tr>
    <tr>
      <td><code>2f(x)</code></td>
      <td>Vertical stretch</td>
    </tr>
    <tr>
      <td><code>f(0.5x)</code></td>
      <td>Horizontal stretch</td>
    </tr>
  </table>
  <h4>Key Reminders:</h4>
  <ul>
    <li>Do transformations step-by-step if more than one is applied.</li>
    <li>Use tables and graphs to double-check changes.</li>
    <li>Follow correct order: inside changes (horizontal) → outside changes (vertical).</li>
  </ul>
  <h4>Summary:</h4>
  <p>
    Transformations change the position and shape of a function's graph. Understanding how each transformation affects the function allows for more flexible graphing and function manipulation.
  </p>
<div class="topic">
<pre>
Unit 1: Functions and their Graphs
1. Definitions and Types of Functions
2. Domain and Range
3. Evaluating Functions
4. Piecewise Functions
5. Graphs of Functions
6. Transformations of Functions

Unit 2: Business Mathematics (Interest)
7. Simple Interest
8. Compound Interest
9. Applications of Interest in Loans and Investments

Unit 3: Business Mathematics (Annuities & Installments)
10. Annuities – Ordinary & Due
11. Present Value and Future Value
12. Installment Buying and Amortization

Unit 4: Logic and Reasoning
13. Introduction to Logic
14. Logical Operators (AND, OR, NOT)
15. Truth Tables and Validity
16. Logical Arguments and Fallacies

Unit 5: Mathematics of Consumer Life
17. Discount, Commission, and Taxes
18. Percentage and Mark-up
19. Income, Budgeting, and Personal Finance

</pre>
</div>
</div>
</div>
  `;
  document.getElementById('bodypage').innerHTML = genMath;
}
function empTech() {
  const empTech = `
<div class="bodypage">
<div class="topic">
  <button class="backBTN" onclick="back()">BACK</button>
  <h1>Empowerment Technologies</h1>
  <h3>Grade 11 - 2nd Semester</h3>
  <p>(no official Empowerment Technologies lessons in 1st Semester under DepEd’s Senior High School curriculum)</p>
  <hr />
  <h2>Lesson 1: Information and Communication Technology (ICT) in the 21st Century</h2>
  <h4>Learning Objectives:</h4>
  <ul>
    <li>Define ICT and its components.</li>
    <li>Understand how ICT has transformed the modern world.</li>
    <li>Identify the uses and importance of ICT in various sectors.</li>
  </ul>
  <h4>What is ICT?</h4>
  <p>
    <strong>Information and Communication Technology (ICT)</strong> refers to technologies that provide access to information through telecommunications.
    It includes the internet, wireless networks, cell phones, computers, software, social media, and other digital platforms.
  </p>
  <h4>Evolution of ICT:</h4>
  <ul>
    <li><strong>1st Generation:</strong> Basic computing – calculators, early PCs</li>
    <li><strong>2nd Generation:</strong> Personal computers, office software (MS Office)</li>
    <li><strong>3rd Generation:</strong> Internet access, websites, emails</li>
    <li><strong>4th Generation:</strong> Mobile devices, cloud computing, social media</li>
    <li><strong>5th Generation:</strong> Artificial Intelligence, IoT, 5G networks</li>
  </ul>
  <h4>ICT in Daily Life:</h4>
  <ul>
    <li><strong>Communication:</strong> Chat apps, email, video conferencing</li>
    <li><strong>Education:</strong> Online classes, e-learning platforms (e.g., Google Classroom)</li>
    <li><strong>Business:</strong> E-commerce, inventory systems, digital marketing</li>
    <li><strong>Government:</strong> Online forms, e-Government services (e.g., PSA, SSS portals)</li>
    <li><strong>Entertainment:</strong> Streaming, social media, games</li>
  </ul>
  <h4>ICT in the Philippines:</h4>
  <p>
    The Philippines is known as the “<strong>Social Media Capital of the World</strong>” due to the high usage of platforms like Facebook and TikTok.
    The country is also a top location for <strong>BPO (Business Process Outsourcing)</strong> services — a major economic contributor.
  </p>
  <h4>Trends and Innovations in ICT:</h4>
  <ul>
    <li>Cloud computing</li>
    <li>Wearable technology</li>
    <li>Big data</li>
    <li>Mobile technologies</li>
    <li>Artificial Intelligence and machine learning</li>
  </ul>
  <h4>Benefits of ICT:</h4>
  <ul>
    <li>Faster and more effective communication</li>
    <li>Improved access to education and information</li>
    <li>Automation of tasks and increase in productivity</li>
    <li>Enhanced global connectivity</li>
  </ul>
  <h4>Challenges of ICT:</h4>
  <ul>
    <li>Cybersecurity threats and data privacy issues</li>
    <li>Digital divide — not everyone has equal access</li>
    <li>Dependence on technology can reduce face-to-face interaction</li>
    <li>Online misinformation and cyberbullying</li>
  </ul>
  <h4>Key Terms:</h4>
  <ul>
    <li><strong>ICT:</strong> Use of digital technology to manage and communicate information</li>
    <li><strong>Digital Divide:</strong> Gap between those who have access to technology and those who do not</li>
    <li><strong>BPO:</strong> Business Process Outsourcing — companies outsourcing work (like customer service) to other countries</li>
    <li><strong>Cloud Computing:</strong> Accessing files or software over the internet instead of from a local computer</li>
  </ul>
  <h4>Summary:</h4>
  <p>
    ICT plays a vital role in modern society — from communication to education, governance to business.
    As the world becomes more digital, understanding ICT helps us become more productive, informed, and connected.
  </p>
</div>
<div class="topic">
  <h2>Lesson 2: Online Safety, Security, Ethics & Etiquete</h2>
  <h4>Learning Objectives:</h4>
  <ul>
    <li>Understand the risks and threats of using the internet.</li>
    <li>Practice ethical behavior and proper etiquette online.</li>
    <li>Apply safety and security measures in digital environments.</li>
  </ul>
  <h4>What is Online Safety?</h4>
  <p>
    Online safety refers to the protection of personal information and behavior while using the internet. It includes protecting your identity, avoiding scams, and being aware of digital threats.
  </p>
  <h4>Common Online Threats:</h4>
  <ul>
    <li><strong>Phishing:</strong> Fake emails or websites that steal login info or bank details.</li>
    <li><strong>Malware:</strong> Harmful software like viruses, trojans, and spyware.</li>
    <li><strong>Identity Theft:</strong> Using someone else’s personal info without permission.</li>
    <li><strong>Scams and Fraud:</strong> Fake offers or sellers that steal money.</li>
    <li><strong>Cyberbullying:</strong> Using digital platforms to harass or intimidate others.</li>
  </ul>
  <h4>Online Security Measures:</h4>
  <ul>
    <li>Use strong, unique passwords and change them regularly.</li>
    <li>Install and update antivirus software.</li>
    <li>Enable two-factor authentication (2FA).</li>
    <li>Avoid clicking on suspicious links or attachments.</li>
    <li>Always log out after using public/shared devices.</li>
    <li>Keep personal information private on social media.</li>
  </ul>
  <h4>What is Digital Ethics?</h4>
  <p>
    Digital ethics is the responsible use of technology. It includes respecting others' privacy, intellectual property, and being honest and fair online.
  </p>
  <h4>Examples of Ethical Behavior Online:</h4>
  <ul>
    <li>Giving credit when using someone’s work (e.g., citing sources).</li>
    <li>Not spreading false information.</li>
    <li>Respecting the privacy of others (e.g., not sharing personal content without consent).</li>
    <li>Reporting abuse or harmful content.</li>
  </ul>
  <h4>What is Netiquette?</h4>
  <p>
    <strong>Netiquette</strong> is short for "internet etiquette." It is the set of rules for polite and respectful communication online.
  </p>
  <h4>Basic Rules of Netiquette:</h4>
  <ul>
    <li>Be respectful in messages, posts, and comments.</li>
    <li>Avoid using ALL CAPS (it sounds like shouting).</li>
    <li>Think before you post — everything online can be permanent.</li>
    <li>Avoid spamming or flooding chats.</li>
    <li>Use proper language and grammar when needed.</li>
    <li>Respect differences in opinion.</li>
  </ul>
  <h4>Online Citizenship:</h4>
  <p>
    A responsible online user is called a **digital citizen**. Practicing online safety, ethics, and etiquette helps maintain a healthy and respectful digital world.
  </p>
  <h4>Summary:</h4>
  <p>
    The internet is powerful but also risky. Knowing how to protect yourself and others — by being safe, secure, respectful, and ethical — is essential for students and professionals in the 21st century.
  </p>
</div>
<div class="topic">
  <h2>Lesson 3: Productivity Tools</h2>
  <h4>Learning Objectives:</h4>
  <ul>
    <li>Identify common productivity tools used for word processing, spreadsheets, and presentations.</li>
    <li>Understand the functions and uses of productivity software.</li>
    <li>Demonstrate basic skills in using Microsoft Office or Google Workspace tools.</li>
  </ul>
  <h4>What Are Productivity Tools?</h4>
  <p>
    Productivity tools are applications that help users create documents, calculate data, present information, and manage tasks efficiently. The most common productivity tools are:
  </p>
  <ul>
    <li><strong>Word Processors</strong> – for typing, editing, and formatting text (e.g., MS Word, Google Docs)</li>
    <li><strong>Spreadsheets</strong> – for organizing and calculating data (e.g., MS Excel, Google Sheets)</li>
    <li><strong>Presentation Tools</strong> – for visual slide presentations (e.g., MS PowerPoint, Google Slides)</li>
  </ul>
  <h4>1. Word Processing Tools</h4>
  <p>
    These tools are used to create written documents such as reports, letters, and essays.
  </p>
  <h5>Common Features:</h5>
  <ul>
    <li>Text formatting (font style, size, color)</li>
    <li>Paragraph alignment, bullets, and numbering</li>
    <li>Inserting images, tables, and hyperlinks</li>
    <li>Spelling and grammar checker</li>
  </ul>
  <h5>Examples of Use:</h5>
  <ul>
    <li>Creating an academic report</li>
    <li>Writing a formal letter</li>
    <li>Making a résumé or job application</li>
  </ul>
  <h4>2. Spreadsheet Tools</h4>
  <p>
    Spreadsheets are used for handling numerical data, making calculations, and creating data tables.
  </p>
  <h5>Common Features:</h5>
  <ul>
    <li>Rows and columns for organizing data</li>
    <li>Mathematical formulas and functions (e.g., SUM, AVERAGE, IF)</li>
    <li>Chart creation (bar, line, pie charts)</li>
    <li>Conditional formatting</li>
  </ul>
  <h5>Examples of Use:</h5>
  <ul>
    <li>Budget planning</li>
    <li>Inventory tracking</li>
    <li>Grade computation</li>
  </ul>
  <h4>3. Presentation Tools</h4>
  <p>
    Presentation software allows users to create visual aids for speeches or reports using slides.
  </p>
  <h5>Common Features:</h5>
  <ul>
    <li>Slide templates and themes</li>
    <li>Text boxes and bullet points</li>
    <li>Images, videos, and transitions</li>
    <li>Animations and slide timing</li>
  </ul>
  <h5>Examples of Use:</h5>
  <ul>
    <li>Oral reports and class presentations</li>
    <li>Business proposals or pitches</li>
    <li>Seminar or workshop materials</li>
  </ul>
  <h4>Other Digital Productivity Tools:</h4>
  <ul>
    <li><strong>Note-taking apps:</strong> Google Keep, Notion, OneNote</li>
    <li><strong>Task managers:</strong> Trello, Todoist, Asana</li>
    <li><strong>Collaboration tools:</strong> Google Workspace, Microsoft Teams</li>
  </ul>
  <h4>Tips for Using Productivity Tools Effectively:</h4>
  <ul>
    <li>Learn keyboard shortcuts to save time.</li>
    <li>Organize files and folders logically.</li>
    <li>Use cloud storage for backup and access anywhere.</li>
    <li>Review spelling and formatting before sharing documents.</li>
  </ul>
  <h4>Summary:</h4>
  <p>
    Productivity tools are essential for students and professionals alike. By mastering word processors, spreadsheets, and presentation software, you can communicate ideas, manage data, and present information efficiently and effectively.
  </p>
</div>
<div class="topic">
  <h2>Lesson 4: Imaging and Design for the Online Environment</h2>
  <h4>Learning Objectives:</h4>
  <ul>
    <li>Understand the principles of design and visual communication.</li>
    <li>Learn the basic concepts of image editing and digital design tools.</li>
    <li>Apply design elements and techniques to create visual content for online platforms.</li>
  </ul>
  <h4>What is Imaging and Design?</h4>
  <p>
    Imaging and design involve creating or editing visual content such as graphics, photos, posters, infographics, and more — often used in websites, social media, or digital campaigns.
    Design enhances communication by using visuals that are appealing, meaningful, and easy to understand.
  </p>
  <h4>Principles of Design:</h4>
  <ul>
    <li><strong>Balance:</strong> Equal distribution of visual weight (symmetrical/asymmetrical).</li>
    <li><strong>Contrast:</strong> Difference in color, size, shape, or texture to highlight important elements.</li>
    <li><strong>Emphasis:</strong> Making one part of the design stand out.</li>
    <li><strong>Repetition:</strong> Reusing elements to create unity and consistency.</li>
    <li><strong>Alignment:</strong> Proper placement of elements to create order.</li>
    <li><strong>Proximity:</strong> Grouping related items together to show connection.</li>
  </ul>
  <h4>Elements of Design:</h4>
  <ul>
    <li><strong>Line:</strong> Used to separate content, direct attention, or create shapes.</li>
    <li><strong>Shape:</strong> Geometric or organic forms used to create visual interest.</li>
    <li><strong>Color:</strong> Sets the tone, emotion, and theme of the design.</li>
    <li><strong>Texture:</strong> Gives a surface feel — real or implied — to an image.</li>
    <li><strong>Space:</strong> Refers to the area between and around elements.</li>
    <li><strong>Typography:</strong> The style, arrangement, and appearance of text.</li>
  </ul>
  <h4>File Formats for Online Images:</h4>
  <ul>
    <li><strong>JPEG (.jpg):</strong> Best for photos and realistic images; small file size.</li>
    <li><strong>PNG (.png):</strong> Supports transparency; good for graphics and logos.</li>
    <li><strong>GIF (.gif):</strong> For simple animations and low-color graphics.</li>
    <li><strong>SVG (.svg):</strong> Scalable Vector Graphics, ideal for responsive web design.</li>
  </ul>
  <h4>Popular Tools for Image Editing and Design:</h4>
  <ul>
    <li><strong>Canva:</strong> User-friendly design tool for creating posters, infographics, and social media content.</li>
    <li><strong>Adobe Photoshop:</strong> Industry-standard for professional image editing.</li>
    <li><strong>Pixlr:</strong> Free browser-based editor with advanced features.</li>
    <li><strong>GIMP:</strong> Open-source alternative to Photoshop.</li>
  </ul>
  <h4>Tips for Designing Effective Online Content:</h4>
  <ul>
    <li>Keep it simple and focused.</li>
    <li>Use high-quality images and consistent color schemes.</li>
    <li>Make sure text is readable and clear.</li>
    <li>Align content properly — avoid clutter.</li>
    <li>Test responsiveness across devices (mobile, tablet, desktop).</li>
  </ul>
  <h4>Example Design Projects:</h4>
  <ul>
    <li>Creating a banner for a school event</li>
    <li>Designing a personal logo</li>
    <li>Editing a social media post template</li>
    <li>Making an infographic about ICT tools</li>
  </ul>
  <h4>Summary:</h4>
  <p>
    Digital imaging and design play a key role in communication today. By understanding design principles and using the right tools, you can create visually effective content that grabs attention and delivers your message clearly — perfect for websites, projects, and digital platforms.
  </p>
</div>
<div class="topic">
  <h2>Lesson 5: Web Design with HTML and CSS</h2>
  <h4>Learning Objectives:</h4>
  <ul>
    <li>Understand the structure and role of HTML and CSS in web design.</li>
    <li>Create basic web pages using HTML elements and CSS styling.</li>
    <li>Apply design principles in layout, formatting, and responsiveness.</li>
  </ul>
  <h4>What is Web Design?</h4>
  <p>
    Web design is the process of creating the layout, visual appearance, and usability of a website. It includes the use of <strong>HTML</strong> (Hypertext Markup Language) for structure and <strong>CSS</strong> (Cascading Style Sheets) for styling.
  </p>
  <h4>What is HTML?</h4>
  <p>
    <strong>HTML</strong> is the standard markup language used to create web pages. It defines the structure of content by using tags.
  </p>
  <h5>Basic HTML Structure:</h5>
  <pre>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;My First Website&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Welcome to My Page&lt;/h1&gt;
    &lt;p&gt;This is a paragraph.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;
  </pre>
  <h5>Common HTML Tags:</h5>
  <ul>
    <li><code>&lt;h1&gt; to &lt;h6&gt;</code> – Headings</li>
    <li><code>&lt;p&gt;</code> – Paragraph</li>
    <li><code>&lt;a href=""&gt;</code> – Hyperlink</li>
    <li><code>&lt;img src=""&gt;</code> – Image</li>
    <li><code>&lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;</code> – Lists</li>
    <li><code>&lt;div&gt;</code> – Division/container</li>
  </ul>
  <h4>What is CSS?</h4>
  <p>
    <strong>CSS</strong> is a stylesheet language used to describe the presentation of HTML elements — such as colors, layouts, and fonts. CSS separates content from design.
  </p>
  <h5>Basic CSS Syntax:</h5>
  <pre>
selector {
  property: value;
}
  </pre>

  <h5>Example:</h5>
  <pre>
p {
  color: blue;
  font-size: 16px;
}
  </pre>
  <h4>Ways to Apply CSS:</h4>
  <ul>
    <li><strong>Inline:</strong> inside HTML element (not recommended for full sites)</li>
    <li><strong>Internal:</strong> within &lt;style&gt; tag in the &lt;head&gt;</li>
    <li><strong>External:</strong> separate .css file (recommended)</li>
  </ul>
  <h4>Basic Layout Concepts:</h4>
  <ul>
    <li><strong>Box Model:</strong> Content → Padding → Border → Margin</li>
    <li><strong>Flexbox/Grid:</strong> Used for flexible layouts and responsive design</li>
    <li><strong>Media Queries:</strong> CSS rules based on screen size for responsive design</li>
  </ul>
  <h4>Example: Simple Web Page</h4>
  <pre>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;style&gt;
    body {
      background-color: #f0f0f0;
      font-family: Arial;
    }
    h1 {
      color: navy;
    }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;My First Website&lt;/h1&gt;
  &lt;p&gt;This is an example of HTML with CSS.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
  </pre>
  <h4>Design Tips:</h4>
  <ul>
    <li>Keep your layout clean and simple.</li>
    <li>Use a readable font and consistent color scheme.</li>
    <li>Organize your content using sections and containers.</li>
    <li>Test your website on different screen sizes.</li>
    <li>Write semantic HTML for accessibility and SEO.</li>
  </ul>
  <h4>Tools for Web Design:</h4>
  <ul>
    <li>Text Editors: VS Code, Sublime Text, Notepad++</li>
    <li>Design: Figma, Canva, Adobe XD</li>
    <li>Testing: Browser Developer Tools, Lighthouse, Responsively App</li>
  </ul>
  <h4>Summary:</h4>
  <p>
    HTML and CSS are foundational skills for creating websites. HTML structures the content, while CSS makes it visually appealing. With practice, you can build responsive and engaging websites for school projects or personal portfolios.
  </p>
</div>
<div class="topic">
  <h2>Lesson 6: Interactive Multimedia</h2>
  <h4>Learning Objectives:</h4>
  <ul>
    <li>Define multimedia and its components.</li>
    <li>Understand how multimedia becomes interactive.</li>
    <li>Create and evaluate simple interactive multimedia content.</li>
  </ul>
  <h4>What is Multimedia?</h4>
  <p>
    <strong>Multimedia</strong> is any content that combines different forms of media such as text, images, audio, video, and animation to communicate information or tell a story.
  </p>
  <h5>Types of Media:</h5>
  <ul>
    <li><strong>Text:</strong> Written content like paragraphs, headlines, and labels.</li>
    <li><strong>Image:</strong> Photographs, graphics, drawings, and illustrations.</li>
    <li><strong>Audio:</strong> Voice narration, music, sound effects.</li>
    <li><strong>Video:</strong> Moving visuals, real-time or pre-recorded clips.</li>
    <li><strong>Animation:</strong> Moving graphics or illustrations, including motion effects.</li>
  </ul>
  <h4>What is Interactive Multimedia?</h4>
  <p>
    Interactive multimedia allows users to engage with digital content by clicking, touching, or navigating. It’s not just for viewing or listening — it involves participation.
  </p>
  <h5>Examples of Interactive Multimedia:</h5>
  <ul>
    <li>Educational games and simulations</li>
    <li>Interactive websites and quizzes</li>
    <li>Infographics with clickable sections</li>
    <li>Apps with audio/video feedback</li>
    <li>Virtual tours (e.g., 360° walkthroughs)</li>
  </ul>
  <h4>Advantages of Interactive Multimedia:</h4>
  <ul>
    <li>Increases user engagement and participation</li>
    <li>Improves understanding and retention of information</li>
    <li>Provides instant feedback to learners</li>
    <li>Encourages exploration and discovery</li>
  </ul>
  <h4>Uses of Interactive Multimedia:</h4>
  <ul>
    <li><strong>Education:</strong> E-learning modules, virtual labs</li>
    <li><strong>Entertainment:</strong> Video games, digital storytelling</li>
    <li><strong>Business:</strong> Product demos, marketing presentations</li>
    <li><strong>Tourism:</strong> Interactive maps, VR exhibits</li>
  </ul>
  <h4>Tools for Creating Multimedia:</h4>
  <ul>
    <li>Canva – for static visuals and simple animations</li>
    <li>PowerPoint – for interactive slideshows</li>
    <li>Adobe Animate or After Effects – for motion graphics</li>
    <li>Genially – for interactive infographics and quizzes</li>
    <li>Scratch – for basic interactive games</li>
  </ul>
  <h4>Best Practices in Designing Interactive Multimedia:</h4>
  <ul>
    <li>Start with clear learning or communication goals.</li>
    <li>Keep the interface user-friendly and intuitive.</li>
    <li>Use high-quality media elements.</li>
    <li>Provide clear instructions and navigation buttons.</li>
    <li>Test functionality and accessibility on different devices.</li>
  </ul>
  <h4>Summary:</h4>
  <p>
    Interactive multimedia enhances digital content by combining multiple media types with user interactivity. It's a powerful tool in education, marketing, and entertainment — enabling learners and users to actively engage with content and deepen their experience.
  </p>
</div>
<div class="topic">
  <h2>Lesson 7: Platforms for ICT Content Development</h2>
  <h4>Learning Objectives:</h4>
  <ul>
    <li>Identify the different platforms for developing digital content.</li>
    <li>Understand the purpose and features of content development tools.</li>
    <li>Select appropriate platforms for specific ICT tasks and projects.</li>
  </ul>
  <h4>What is a Platform?</h4>
  <p>
    A <strong>platform</strong> is a software or service that provides tools and environments for creating, publishing, and managing digital content. Platforms help individuals and organizations deliver content efficiently — whether for learning, business, or entertainment.
  </p>
  <h4>Types of ICT Content Development Platforms:</h4>
  <h5>1. Social Media Platforms</h5>
  <ul>
    <li>Used for sharing content like photos, videos, and blog posts.</li>
    <li>Examples: Facebook, Instagram, TikTok, Twitter, YouTube</li>
    <li>Best for: marketing, personal branding, awareness campaigns</li>
  </ul>
  <h5>2. Blogging and Website Platforms</h5>
  <ul>
    <li>Allow users to publish written articles, media, and information online.</li>
    <li>Examples: WordPress, Blogger, Wix, Weebly</li>
    <li>Best for: publishing educational content, news, personal websites</li>
  </ul>
  <h5>3. Content Management Systems (CMS)</h5>
  <ul>
    <li>Software used to manage and organize large amounts of digital content.</li>
    <li>Examples: Joomla, Drupal, WordPress (with plugins)</li>
    <li>Best for: schools, businesses, or e-commerce websites</li>
  </ul>
  <h5>4. Multimedia and Design Platforms</h5>
  <ul>
    <li>Used for creating images, infographics, videos, and animations.</li>
    <li>Examples: Canva, Adobe Creative Cloud, Figma, Piktochart</li>
    <li>Best for: visual content creation, digital campaigns</li>
  </ul>
  <h5>5. Learning Management Systems (LMS)</h5>
  <ul>
    <li>Platforms for delivering e-learning and online training materials.</li>
    <li>Examples: Google Classroom, Moodle, Edmodo</li>
    <li>Best for: managing lessons, assessments, and student progress</li>
  </ul>
  <h5>6. E-Commerce Platforms</h5>
  <ul>
    <li>Enable users to build online stores and sell products/services.</li>
    <li>Examples: Shopify, WooCommerce, Lazada, Shopee</li>
    <li>Best for: online selling, product promotion, managing orders</li>
  </ul>
  <h5>7. Communication & Collaboration Tools</h5>
  <ul>
    <li>Support teamwork and remote interaction.</li>
    <li>Examples: Google Workspace (Docs, Drive, Meet), Microsoft Teams, Zoom</li>
    <li>Best for: group projects, document sharing, virtual meetings</li>
  </ul>
  <h4>Factors to Consider When Choosing a Platform:</h4>
  <ul>
    <li><strong>Purpose:</strong> What content do you want to develop?</li>
    <li><strong>Ease of Use:</strong> Is the platform user-friendly?</li>
    <li><strong>Features:</strong> Does it support the tools you need?</li>
    <li><strong>Cost:</strong> Is it free or paid?</li>
    <li><strong>Accessibility:</strong> Can others view or collaborate easily?</li>
  </ul>
  <h4>Best Practices for Content Development:</h4>
  <ul>
    <li>Plan your content (goal, audience, message).</li>
    <li>Use a consistent visual style and tone.</li>
    <li>Keep it simple, relevant, and engaging.</li>
    <li>Use original or properly credited resources.</li>
    <li>Test and evaluate your content before publishing.</li>
  </ul>
  <h4>Summary:</h4>
  <p>
    Platforms for ICT content development empower individuals to create, share, and manage digital materials for communication, education, marketing, and collaboration. Choosing the right platform depends on your goals, technical skills, and target audience.
  </p>
</div>
<div class="topic">
  <h2>Lesson 8: Web Page Design Using Templates</h2>
  <h4>Learning Objectives:</h4>
  <ul>
    <li>Understand the use and purpose of web templates.</li>
    <li>Customize existing templates to create simple web pages.</li>
    <li>Apply good design principles while using web templates.</li>
  </ul>
  <h4>What is a Web Template?</h4>
  <p>
    A <strong>web template</strong> is a pre-designed webpage or set of HTML, CSS, and image files used to create websites easily. It provides a basic layout and design so users can simply customize the content without starting from scratch.
  </p>
  <h4>Benefits of Using Web Templates:</h4>
  <ul>
    <li>Saves time and effort in designing from the ground up</li>
    <li>Provides professional-looking layouts</li>
    <li>Easy to edit using HTML and CSS knowledge</li>
    <li>Responsive and mobile-ready in most cases</li>
    <li>Great for beginners in web development</li>
  </ul>
  <h4>Common Template Sources:</h4>
  <ul>
    <li>HTML5 UP (html5up.net)</li>
    <li>Colorlib (colorlib.com)</li>
    <li>BootstrapMade (bootstrapmade.com)</li>
    <li>W3Schools Templates</li>
    <li>GitHub Repositories</li>
  </ul>
  <h4>Basic Steps to Use a Template:</h4>
  <ol>
    <li>Download the template (ZIP file or source files)</li>
    <li>Extract and open in a code editor (like VS Code)</li>
    <li>Identify which files to edit: typically <code>index.html</code> and <code>style.css</code></li>
    <li>Replace content such as headings, paragraphs, and images</li>
    <li>Modify colors, fonts, and layout as needed using CSS</li>
    <li>Save and test the webpage in a browser</li>
  </ol>
  <h4>Tips When Editing Templates:</h4>
  <ul>
    <li>Always keep a backup copy before making changes</li>
    <li>Understand the layout structure first (use comments)</li>
    <li>Check for mobile responsiveness</li>
    <li>Use meaningful content and images</li>
    <li>Validate HTML and CSS using online tools</li>
  </ul>
  <h4>Example: Editing a Simple Template</h4>
  <p>Suppose a template has this line in the HTML:</p>
  <pre>
&lt;h1&gt;Welcome to My Website&lt;/h1&gt;
  </pre>
  <p>You can change it to:</p>
  <pre>
&lt;h1&gt;Jasmine’s Portfolio&lt;/h1&gt;
  </pre>
  <p>And update the style in CSS:</p>
  <pre>
h1 {
  color: #4CAF50;
  font-family: 'Poppins', sans-serif;
}
  </pre>
  <h4>Design Principles to Remember:</h4>
  <ul>
    <li><strong>Consistency:</strong> Fonts, colors, and spacing should be uniform</li>
    <li><strong>Readability:</strong> Use simple and clean text styles</li>
    <li><strong>Visual Hierarchy:</strong> Emphasize headings and important info</li>
    <li><strong>Responsiveness:</strong> Ensure your template adjusts to all devices</li>
  </ul>
  <h4>Summary:</h4>
  <p>
    Web templates are a helpful starting point for designing web pages quickly and effectively. With basic knowledge of HTML and CSS, students can customize templates to reflect their personal style or project requirements while applying proper design principles.
  </p>
</div>
<div class="topic">
  <h2>Lesson 9: ICT Project for Social Change</h2>
  <h4>Learning Objectives:</h4>
  <ul>
    <li>Understand how ICT can be used to promote positive change in society.</li>
    <li>Identify real-life ICT-based projects that address social issues.</li>
    <li>Plan and develop a simple ICT project proposal for social awareness or action.</li>
  </ul>
  <h4>What is ICT for Social Change?</h4>
  <p>
    <strong>ICT for Social Change</strong> refers to the use of digital tools, platforms, and technologies to raise awareness, solve problems, or support advocacy for the betterment of society. Students, communities, and organizations can use websites, social media, multimedia, and apps to influence change and promote meaningful causes.
  </p>
  <h4>Examples of ICT for Social Good:</h4>
  <ul>
    <li><strong>Websites</strong> promoting mental health awareness</li>
    <li><strong>Campaign videos</strong> against bullying or discrimination</li>
    <li><strong>Social media pages</strong> supporting environmental causes</li>
    <li><strong>Mobile apps</strong> for disaster alerts or donation drives</li>
    <li><strong>Infographics</strong> about public health and safety</li>
  </ul>
  <h4>Common Social Issues You Can Address:</h4>
  <ul>
    <li>Poverty and hunger</li>
    <li>Climate change and environmental care</li>
    <li>Health and wellness education</li>
    <li>Cyberbullying and digital responsibility</li>
    <li>Women’s rights, child protection, equality</li>
  </ul>
  <h4>ICT Tools You Can Use:</h4>
  <ul>
    <li>Google Sites or WordPress – for making informational websites</li>
    <li>Canva or Adobe Spark – for posters, infographics, and digital campaigns</li>
    <li>YouTube or TikTok – for creating awareness videos</li>
    <li>Facebook, Instagram, Twitter – for social media advocacy</li>
    <li>Scratch or MIT App Inventor – for simple apps and interactive content</li>
  </ul>
  <h4>Steps in Planning an ICT Project:</h4>
  <ol>
    <li><strong>Identify a relevant issue or problem</strong> in your community or country.</li>
    <li><strong>Set objectives</strong> – what do you want to achieve?</li>
    <li><strong>Choose your platform</strong> (website, video, infographic, app, etc.)</li>
    <li><strong>Plan your content</strong> – visuals, text, and message</li>
    <li><strong>Design and create</strong> your digital content using ICT tools</li>
    <li><strong>Share and promote</strong> the project through appropriate channels</li>
  </ol>
  <h4>Project Sample Ideas:</h4>
  <ul>
    <li>A website educating students on cyber safety</li>
    <li>A short video about environmental protection</li>
    <li>A Facebook campaign promoting kindness and mental health</li>
    <li>An infographic explaining how to reduce plastic use</li>
    <li>An app that alerts users about local community programs or donations</li>
  </ul>
  <h4>Tips for Effective ICT Projects:</h4>
  <ul>
    <li>Keep your message clear and easy to understand</li>
    <li>Use visuals to engage your audience</li>
    <li>Ensure facts and data are accurate</li>
    <li>Make your project interactive if possible</li>
    <li>Promote your project to reach more people</li>
  </ul>
  <h4>Summary:</h4>
  <p>
    ICT empowers students like you to create powerful projects that inspire change and promote awareness. Whether through websites, videos, or online campaigns, your voice and creativity can help solve social problems and encourage responsible digital citizenship.
  </p>
</div>
<div class="topic">
  <h2>Lesson 10: Final ICT Project Presentation</h2>
  <h4>Learning Objectives:</h4>
  <ul>
    <li>Present a well-planned ICT project that addresses a real-world issue.</li>
    <li>Demonstrate effective communication and digital content creation skills.</li>
    <li>Apply best practices in project development and evaluation.</li>
  </ul>
  <h4>Purpose of the Final ICT Project:</h4>
  <p>
    The final ICT project is your chance to showcase everything you’ve learned in Empowerment Technologies. It is a practical application of using digital tools and platforms to promote social change, raise awareness, or provide a solution to a community problem.
  </p>
  <h4>What You Need to Prepare:</h4>
  <ul>
    <li>A completed ICT project (website, infographic, video, app, etc.)</li>
    <li>A short written report or proposal explaining your project</li>
    <li>A presentation for the class (PowerPoint, website walkthrough, or video)</li>
  </ul>
  <h4>Presentation Guidelines:</h4>
  <ol>
    <li><strong>Title Slide:</strong> Project name, your name, date, and section</li>
    <li><strong>Introduction:</strong> What is your project about? What problem does it solve?</li>
    <li><strong>Objectives:</strong> What did you aim to achieve?</li>
    <li><strong>Target Audience:</strong> Who will benefit from your project?</li>
    <li><strong>Process:</strong> How did you create it? What tools and platforms did you use?</li>
    <li><strong>Output:</strong> Show the actual product — walk through your website, video, design, etc.</li>
    <li><strong>Reflection:</strong> What challenges did you face and how did you overcome them?</li>
    <li><strong>Conclusion:</strong> How can this project help others or be improved further?</li>
  </ol>
  <h4>Tips for a Good Presentation:</h4>
  <ul>
    <li>Practice speaking clearly and confidently</li>
    <li>Use visuals to support your explanation</li>
    <li>Be honest and proud of your effort — even simple projects can have big impact</li>
    <li>Keep your presentation within 5–7 minutes</li>
    <li>Be ready to answer questions from your teacher or classmates</li>
  </ul>
  <h4>Project Evaluation Criteria (Example):</h4>
  <ul>
    <li><strong>Content and Relevance (30%)</strong> – Clear message, useful, and socially relevant</li>
    <li><strong>Creativity and Design (20%)</strong> – Visually appealing, well-designed, original</li>
    <li><strong>Technical Execution (20%)</strong> – Proper use of ICT tools, good functionality</li>
    <li><strong>Presentation (20%)</strong> – Clear explanation, organized, confident delivery</li>
    <li><strong>Teamwork / Effort (10%)</strong> – Collaboration, research, planning</li>
  </ul>
  <h4>Summary:</h4>
  <p>
    Your final ICT project is more than a school requirement — it's a chance to make a difference using your digital skills. Whether it’s a campaign, website, or app, your project reflects your creativity, empathy, and understanding of how technology can empower others.
  </p>
</div>
</div>
  `;
  document.getElementById('bodypage').innerHTML = empTech
}
function oralCom() {
    const oralCom = `
<div class="bodypage">
<div class="topic">
    <button class="backBTN" onclick="back()">BACK</button>
    <h1>Oral Communication in Context</h1>
    <h3>Grade 11 - 1st Semester</h3>
    <h3>Unit 1: The Nature & Elements of Communication</h3>
    <hr />
    <h2>Lesson 1: Nature and Importance of Communication</h2>
    <h4>Learning Objectives:</h4>
    <ul>
      <li>Define communication and understand its essential role in human interaction.</li>
      <li>Recognize the importance of communication in academic, personal, and professional settings.</li>
    </ul>
    <h4>What is Communication?</h4>
    <p>
      Communication is the process of sending and receiving messages between two or more people with the purpose of being understood. It involves sharing ideas, thoughts, emotions, and information using spoken or written words, gestures, symbols, facial expressions, and body language.
    </p>
    <h4>Nature of Communication:</h4>
    <ul>
      <li><strong>Communication is a Process</strong> – It occurs in stages: from sender to message to receiver and feedback, continuously.</li>
      <li><strong>Communication is Dynamic</strong> – It constantly changes based on context, mood, and situation.</li>
      <li><strong>Communication is Systemic</strong> – It is influenced by environment, culture, social roles, and setting.</li>
      <li><strong>Communication is Symbolic</strong> – It uses language, signs, gestures, and other symbols to convey meaning.</li>
      <li><strong>Communication is Interactive</strong> – It involves active exchange between sender and receiver, including response or feedback.</li>
    </ul>
    <h4>Importance of Communication:</h4>
    <ul>
      <li><strong>Academic Importance:</strong> Helps in effective class participation, presentations, and collaboration in group activities.</li>
      <li><strong>Personal Importance:</strong> Strengthens relationships, helps express emotions, and avoids misunderstandings.</li>
      <li><strong>Professional Importance:</strong> Vital for teamwork, customer interaction, meetings, job interviews, and leadership.</li>
    </ul>
    <h4>Forms of Communication:</h4>
    <ul>
      <li><strong>Verbal:</strong> Spoken words or oral language.</li>
      <li><strong>Non-verbal:</strong> Gestures, facial expressions, tone of voice, body movement.</li>
      <li><strong>Written:</strong> Messages through letters, texts, emails, or printed documents.</li>
      <li><strong>Visual:</strong> Use of charts, symbols, pictures, or other imagery to communicate.</li>
    </ul>
    <h4>Examples of Communication in Daily Life:</h4>
    <table border="1" cellpadding="8">
      <tr>
        <th>Situation</th>
        <th>Type of Communication</th>
      </tr>
      <tr>
        <td>Talking to a friend</td>
        <td>Verbal / Interpersonal</td>
      </tr>
      <tr>
        <td>Sending a text message</td>
        <td>Written / Digital</td>
      </tr>
      <tr>
        <td>Presenting in class</td>
        <td>Public Speaking</td>
      </tr>
      <tr>
        <td>Smiling at someone</td>
        <td>Non-verbal / Emotional</td>
      </tr>
    </table>
    <h4>Key Reminders:</h4>
    <ul>
      <li>Communication is not only what you say, but how you say it.</li>
      <li>Listening is just as important as speaking.</li>
      <li>Good communication builds connection, trust, and understanding.</li>
      <li>Breakdowns happen when messages are unclear or misunderstood.</li>
    </ul>
    <h4>Summary:</h4>
    <p>
      Communication is an essential skill in all aspects of life. It is a continuous and interactive process that helps people share ideas, emotions, and intentions. Understanding the nature and importance of communication builds stronger relationships, improves learning, and prepares students for future careers.
    </p>
</div>
<div class="topic">
    <h2>Lesson 2: Elements of Communication</h2>
    <h4>Learning Objectives:</h4>
    <ul>
      <li>Identify and define the elements involved in the communication process.</li>
      <li>Explain the role of each element in effective communication.</li>
    </ul>
    <h4>What are the Elements of Communication?</h4>
    <p>
    Communication involves several key components that work together to ensure a message is delivered and understood. These are called the <strong>elements of communication</strong>. Each element plays a specific role in the process.
    </p>
    <h4>Elements of the Communication Process:</h4>
    <ol>
      <li><strong>Sender (Source/Encoder):</strong> The person who creates and delivers the message. The sender encodes (converts thoughts into words or symbols).</li>
      <li><strong>Message:</strong> The information, idea, or emotion that is being communicated.</li>
      <li><strong>Encoding:</strong> The process of converting thoughts or feelings into verbal or non-verbal symbols.</li>
      <li><strong>Channel:</strong> The medium or method used to send the message (e.g., spoken word, written text, gesture, email).</li>
      <li><strong>Receiver (Decoder):</strong> The person who gets the message and interprets it.</li>
     <li><strong>Decoding:</strong> The process of interpreting or making sense of the message.</li>
      <li><strong>Feedback:</strong> The response given by the receiver to the sender. It tells the sender whether the message was understood.</li>
      <li><strong>Noise:</strong> Any barrier or interference that affects the clarity or accuracy of the message (e.g., distractions, language differences, emotional state).</li>
      <li><strong>Context:</strong> The situation or environment where communication takes place (e.g., classroom, workplace, online).</li>
    </ol>
    <h4>Illustration of the Process:</h4>
    <p>
      <em>Sender → Encoding → Message → Channel → Receiver → Decoding → Feedback</em><br>
    (All happening within a specific <strong>Context</strong>, possibly affected by <strong>Noise</strong>)
    </p>
    <h4>Example:</h4>
    <p>
      <strong>Scenario:</strong> A student giving a classroom report.  
      <br><strong>Sender:</strong> The student  
      <br><strong>Message:</strong> Report content  
      <br><strong>Encoding:</strong> Organizing ideas into speech  
      <br><strong>Channel:</strong> Verbal/oral (speech)  
      <br><strong>Receiver:</strong> Classmates and teacher  
      <br><strong>Decoding:</strong> Listeners interpret the report  
      <br><strong>Feedback:</strong> Nods, questions, comments  
      <br><strong>Noise:</strong> Classmates talking, unclear voice  
      <br><strong>Context:</strong> Inside the classroom  
    </p>
    <h4>Importance of Each Element:</h4>
    <ul>
      <li>All elements must work together for communication to succeed.</li>
      <li>A failure or weakness in one element (e.g., unclear message or distracted listener) may cause a communication breakdown.</li>
      <li>Being aware of these elements helps improve your communication skills in both academic and real-world settings.</li>
    </ul>
    <h4>Summary:</h4>
    <p>
    The communication process involves a sender, message, channel, receiver, feedback, and is influenced by noise and context. Understanding each element allows us to express ourselves clearly and avoid breakdowns in communication.
    </p>
</div>
<div class="topic">
  <h2>Lesson 3: Models of Communication</h2>
  <h4>Learning Objectives:</h4>
  <ul>
    <li>Identify the different models of communication.</li>
    <li>Compare the features and flow of communication in each model.</li>
    <li>Recognize the strengths and limitations of each model.</li>
  </ul>
  <h4>What is a Communication Model?</h4>
  <p>
    A <strong>communication model</strong> is a visual or symbolic representation of the communication process.  
    Models help us understand how communication works by identifying its components, flow, and possible breakdowns.
  </p>
  <h4>Types of Communication Models:</h4>
  <ol>
    <li><strong>Linear Model</strong> (One-Way)</li>
    <li><strong>Interactive Model</strong> (Two-Way with Feedback)</li>
    <li><strong>Transactional Model</strong> (Simultaneous Exchange)</li>
  </ol>
  <h3>1. Linear Model of Communication</h3>
  <p>
    The **Linear Model** describes communication as a one-way process. The sender transmits a message through a channel to the receiver.  
    <br><br>
    <strong>Example:</strong> A radio announcer delivering news to the public.
  </p>
  <p><strong>Key Components:</strong> Sender → Message → Channel → Receiver</p>
  <p><strong>Limitation:</strong> No feedback; the receiver is passive.</p>
  <h3>2. Interactive Model of Communication</h3>
  <p>
    The **Interactive Model** introduces feedback and context. After receiving a message, the receiver sends a response.  
    <br><br>
    <strong>Example:</strong> An online chat where users take turns replying.
  </p>
  <p><strong>Key Components:</strong> Sender → Message → Receiver → Feedback (with context)</p>
  <p><strong>Strength:</strong> Recognizes the role of feedback.</p>
  <p><strong>Limitation:</strong> Feedback is still not simultaneous; it’s turn-based.</p>
  <h3>3. Transactional Model of Communication</h3>
  <p>
    The **Transactional Model** sees communication as a continuous and simultaneous process. Both participants are sender and receiver at the same time.  
    <br><br>
    <strong>Example:</strong> A face-to-face conversation where both people give and receive cues at once (verbal and non-verbal).
  </p>
  <p><strong>Key Features:</strong></p>
  <ul>
    <li>Simultaneous sending and receiving of messages</li>
    <li>Includes context, noise, and feedback</li>
    <li>Considers body language, tone, facial expressions</li>
  </ul>
  <p><strong>Strength:</strong> Most realistic model for real-world interaction</p>
  <h4>Comparison Table:</h4>
  <table border="1" cellpadding="8">
    <tr>
      <th>Model</th>
      <th>Direction</th>
      <th>Feedback</th>
      <th>Example</th>
    </tr>
    <tr>
      <td>Linear</td>
      <td>One-way</td>
      <td>No</td>
      <td>TV Broadcast</td>
    </tr>
    <tr>
      <td>Interactive</td>
      <td>Two-way (alternating)</td>
      <td>Yes</td>
      <td>Email exchange</td>
    </tr>
    <tr>
      <td>Transactional</td>
      <td>Two-way (simultaneous)</td>
      <td>Yes (real-time)</td>
      <td>Face-to-face talk</td>
    </tr>
  </table>
  <h4>Why Models Matter:</h4>
  <ul>
    <li>They simplify complex processes.</li>
    <li>Help us analyze communication in different settings.</li>
    <li>Assist in identifying where breakdowns happen.</li>
  </ul>
  <h4>Summary:</h4>
  <p>
    The Linear, Interactive, and Transactional Models each provide a different view of communication. Understanding all three helps us improve how we send and receive messages in academic, personal, and professional situations.
  </p>
</div>
<div class="topic">
  <h2>Lesson 4: Functions of Communication</h2>
  <h4>Learning Objectives:</h4>
  <ul>
    <li>Identify the major functions of communication.</li>
    <li>Explain how communication serves personal, academic, and social purposes.</li>
    <li>Demonstrate how each function is applied in real-life situations.</li>
  </ul>
  <h4>What Are the Functions of Communication?</h4>
  <p>
    Communication serves many purposes in our daily lives. These are called the <strong>functions of communication</strong>. Each function shows a reason why we communicate — whether to express ideas, influence others, build relationships, or understand ourselves.
  </p>
  <h4>Main Functions of Communication:</h4>
  <ol>
    <li><strong>Regulation and Control</strong></li>
    <li><strong>Social Interaction</strong></li>
    <li><strong>Motivation</strong></li>
    <li><strong>Information Dissemination</strong></li>
    <li><strong>Emotional Expression</strong></li>
  </ol>
  <h3>1. Regulation and Control</h3>
  <p>
    Used to manage the behavior of people or to set rules and policies.
    <br><br><strong>Examples:</strong>
    <ul>
      <li>A teacher saying, "Submit your project on Friday."</li>
      <li>Traffic signs or announcements enforcing rules.</li>
    </ul>
  </p>
  <h3>2. Social Interaction</h3>
  <p>
    Used to build and maintain relationships with others. It helps us connect and socialize.
    <br><br><strong>Examples:</strong>
    <ul>
      <li>Chatting with a friend about your day.</li>
      <li>Greeting someone “Good morning!”</li>
    </ul>
  </p>
  <h3>3. Motivation</h3>
  <p>
    Used to encourage or persuade someone to take action or keep going.
    <br><br><strong>Examples:</strong>
    <ul>
      <li>A coach saying, “You can do it!”</li>
      <li>A parent encouraging their child to study hard.</li>
    </ul>
  </p>
  <h3>4. Information Dissemination</h3>
  <p>
    Used to share data, facts, updates, or knowledge.
    <br><br><strong>Examples:</strong>
    <ul>
      <li>News reports delivering current events.</li>
      <li>A student explaining a research topic to the class.</li>
    </ul>
  </p>
  <h3>5. Emotional Expression</h3>
  <p>
    Used to express feelings, opinions, and emotions openly or subtly.
    <br><br><strong>Examples:</strong>
    <ul>
      <li>Smiling when happy or crying when sad.</li>
      <li>Saying “I’m proud of you.”</li>
    </ul>
  </p>
  <h4>Summary Table:</h4>
  <table border="1" cellpadding="8">
    <tr>
      <th>Function</th>
      <th>Description</th>
      <th>Example</th>
    </tr>
    <tr>
      <td>Regulation/Control</td>
      <td>To direct or manage behavior</td>
      <td>“Please line up.”</td>
    </tr>
    <tr>
      <td>Social Interaction</td>
      <td>To build relationships</td>
      <td>“Hi, how are you?”</td>
    </tr>
    <tr>
      <td>Motivation</td>
      <td>To inspire or persuade</td>
      <td>“Keep going, you got this!”</td>
    </tr>
    <tr>
      <td>Information</td>
      <td>To inform or educate</td>
      <td>Giving a weather update</td>
    </tr>
    <tr>
      <td>Emotional Expression</td>
      <td>To express feelings</td>
      <td>“I’m really grateful.”</td>
    </tr>
  </table>
  <h4>Conclusion:</h4>
  <p>
    Communication is more than just speaking — it's a tool for regulating behavior, connecting with others, inspiring action, spreading knowledge, and expressing emotions. Knowing how and when to use these functions will help you communicate effectively in all aspects of life.
  </p>
</div>
</div>
    `;
    document.getElementById('bodypage').innerHTML = oralCom;
}