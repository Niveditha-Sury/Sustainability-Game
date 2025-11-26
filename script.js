
        // Motivation quotes pool
        const motivationQuotes = [
            {
                text: "The greatest threat to our planet is the belief that someone else will save it.",
                author: "Robert Swan"
            },
            {
                text: "We do not inherit the Earth from our ancestors, we borrow it from our children.",
                author: "Native American Proverb"
            },
            {
                text: "What we are doing to the forests of the world is but a mirror reflection of what we are doing to ourselves and to one another.",
                author: "Mahatma Gandhi"
            },
            {
                text: "The environment is where we all meet; where we all have a mutual interest; it is the one thing all of us share.",
                author: "Lady Bird Johnson"
            },
            {
                text: "Sustainability is no longer about doing less harm. It's about doing more good.",
                author: "Jochen Zeitz"
            },
            {
                text: "The Earth will not continue to offer its harvest, except with faithful stewardship. We cannot say we love the land and then take steps to destroy it for use by future generations.",
                author: "Pope John Paul II"
            },
            {
                text: "We won't have a society if we destroy the environment.",
                author: "Margaret Mead"
            },
            {
                text: "There is no such thing as 'away'. When we throw anything away it must go somewhere.",
                author: "Annie Leonard"
            }
        ];

        // Game data with educational information
        const gameData = {
            energy: {
                challenges: [
                    {
                        text: "Power outage! Install solar panels or rely on fossil fuels?",
                        sustainable: {
                            choice: "Install solar panels",
                            points: 2,
                            info: "Solar panels convert sunlight directly into electricity with zero emissions. A typical residential solar panel system can reduce carbon emissions by 3-4 tons annually.",
                            impact: "Reduces CO2 emissions by 3 tons per year and creates energy independence"
                        },
                        unsustainable: {
                            choice: "Use fossil fuels",
                            points: 1,
                            info: "Fossil fuel power plants are responsible for approximately 25% of global greenhouse gas emissions. They also contribute to air pollution that causes respiratory illnesses.",
                            impact: "Increases CO2 emissions by 2 tons per year and contributes to air pollution"
                        }
                    },
                    {
                        text: "High energy use in homes. Promote efficiency or ignore?",
                        sustainable: {
                            choice: "Promote energy efficiency",
                            points: 2,
                            info: "Energy efficient appliances and insulation can reduce home energy use by 20-30%. LED bulbs use 75% less energy than incandescent bulbs.",
                            impact: "Reduces energy consumption by 25% and saves money on utility bills"
                        },
                        unsustainable: {
                            choice: "Ignore the issue",
                            points: 1,
                            info: "Residential buildings account for about 20% of energy consumption in many countries. Inefficient energy use contributes significantly to carbon emissions.",
                            impact: "Wastes energy and increases carbon footprint unnecessarily"
                        }
                    }
                ]
            },
            waste: {
                challenges: [
                    {
                        text: "Landfill overflowing. Start recycling program or dump more?",
                        sustainable: {
                            choice: "Start recycling program",
                            points: 2,
                            info: "Recycling one aluminum can saves enough energy to run a TV for 3 hours. Recycling also reduces landfill waste and conserves natural resources.",
                            impact: "Diverts 60% of waste from landfills and conserves natural resources"
                        },
                        unsustainable: {
                            choice: "Expand landfill",
                            points: 1,
                            info: "Landfills are a major source of methane emissions, a greenhouse gas 25 times more potent than CO2. They can also contaminate soil and groundwater.",
                            impact: "Increases methane emissions and risks soil/water contamination"
                        }
                    },
                    {
                        text: "Plastic waste crisis. Ban single-use or continue using?",
                        sustainable: {
                            choice: "Ban single-use plastics",
                            points: 2,
                            info: "Over 8 million tons of plastic enter our oceans each year. Single-use plastics like bags and straws can take hundreds of years to decompose.",
                            impact: "Reduces plastic pollution by 70% and protects marine ecosystems"
                        },
                        unsustainable: {
                            choice: "Continue using plastics",
                            points: 1,
                            info: "Plastic pollution harms over 600 marine species through ingestion and entanglement. Microplastics have been found in drinking water and food sources.",
                            impact: "Contributes to ocean plastic pollution and harms wildlife"
                        }
                    }
                ]
            },
            water: {
                challenges: [
                    {
                        text: "Drought alert. Conserve water or use excessively?",
                        sustainable: {
                            choice: "Implement water conservation",
                            points: 2,
                            info: "Fixing a dripping tap can save up to 5,500 liters of water per year. Low-flow fixtures can reduce water usage by 30-50%.",
                            impact: "Reduces water consumption by 40% and preserves local water sources"
                        },
                        unsustainable: {
                            choice: "Continue excessive use",
                            points: 1,
                            info: "Only 2.5% of Earth's water is freshwater, and less than 1% is readily available for human use. Excessive water use strains this limited resource.",
                            impact: "Depletes local water reserves and exacerbates drought conditions"
                        }
                    },
                    {
                        text: "Water pollution. Clean sources or pollute further?",
                        sustainable: {
                            choice: "Clean water sources",
                            points: 2,
                            info: "Clean water access is essential for health and ecosystems. Waterborne diseases cause approximately 485,000 diarrheal deaths each year.",
                            impact: "Improves community health and protects aquatic ecosystems"
                        },
                        unsustainable: {
                            choice: "Allow continued pollution",
                            points: 1,
                            info: "Industrial and agricultural runoff is a major source of water pollution, harming aquatic life and making water unsafe for human consumption.",
                            impact: "Risks public health and damages local ecosystems"
                        }
                    }
                ]
            },
            carbon: {
                challenges: [
                    {
                        text: "Traffic jam. Promote public transport or more cars?",
                        sustainable: {
                            choice: "Promote public transport",
                            points: 2,
                            info: "Public transportation produces 95% less carbon monoxide per passenger mile than private vehicles. One full bus can take 40 cars off the road.",
                            impact: "Reduces traffic congestion and cuts transportation emissions by 45%"
                        },
                        unsustainable: {
                            choice: "Build more roads for cars",
                            points: 1,
                            info: "Transportation accounts for about 28% of greenhouse gas emissions in many countries. More roads often lead to more traffic (induced demand).",
                            impact: "Increases air pollution and doesn't solve traffic long-term"
                        }
                    },
                    {
                        text: "Emissions rising. Plant trees or build factories?",
                        sustainable: {
                            choice: "Plant trees",
                            points: 2,
                            info: "A single mature tree can absorb 48 pounds of CO2 per year. Urban trees also reduce energy use by providing shade and cooling effects.",
                            impact: "Absorbs CO2, improves air quality, and enhances urban livability"
                        },
                        unsustainable: {
                            choice: "Build more factories",
                            points: 1,
                            info: "Industrial activities account for about 21% of global greenhouse gas emissions. Factories also contribute to local air and water pollution.",
                            impact: "Increases industrial emissions and local pollution levels"
                        }
                    }
                ]
            }
        };

        // Game class
        class EcoTownGame {
            constructor() {
                this.points = 0;
                this.turns = 0;
                this.sustainableCount = 0;
                this.unsustainableCount = 0;
                this.sustainabilityScore = 0;
                this.currentChallenge = null;
                this.diceRoll = null;
                this.buildings = {
                    energy: { sustainable: false },
                    waste: { sustainable: false },
                    water: { sustainable: false },
                    carbon: { sustainable: false }
                };
                this.categories = ['energy', 'waste', 'water', 'carbon'];
                this.logElement = document.getElementById('log');
                this.initEventListeners();
                this.updateDisplay();
            }

            initEventListeners() {
                document.getElementById('new-turn').addEventListener('click', () => this.newTurn());
                document.getElementById('roll-dice').addEventListener('click', () => this.rollDice());
                document.getElementById('choose-sustainable').addEventListener('click', () => this.makeChoice(true));
                document.getElementById('choose-unsustainable').addEventListener('click', () => this.makeChoice(false));
            }

            newTurn() {
                this.turns++;
                const category = this.categories[Math.floor(Math.random() * this.categories.length)];
                const challengeIndex = Math.floor(Math.random() * gameData[category].challenges.length);
                this.currentChallenge = { 
                    category, 
                    ...gameData[category].challenges[challengeIndex]
                };

                document.getElementById('challenge-text').textContent = this.currentChallenge.text;
                document.getElementById('card-result').textContent = '';
                document.getElementById('dice-result').textContent = '🎲';

                // Hide educational info and messages until choice is made
                document.getElementById('educational-info').style.display = 'none';
                document.getElementById('motivation-quote').style.display = 'none';
                document.getElementById('warning-message').style.display = 'none';

                // Enable choice buttons
                document.getElementById('choose-sustainable').disabled = false;
                document.getElementById('choose-unsustainable').disabled = false;
                document.getElementById('roll-dice').disabled = true;

                this.log(`Turn ${this.turns}: New challenge in ${category} - ${this.currentChallenge.text}`);
                this.updateDisplay();
            }

            rollDice() {
                // Show motivation quote before rolling
                this.showMotivationQuote();
                
                // Add a small delay before showing the dice result for dramatic effect
                setTimeout(() => {
                    this.diceRoll = Math.floor(Math.random() * 6) + 1;
                    
                    // Display fun dice faces based on roll
                    const diceFaces = ['🎲', '⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
                    document.getElementById('dice-result').textContent = diceFaces[this.diceRoll];
                    
                    this.log(`Rolled a ${this.diceRoll} for outcome.`);
                    
                    // Process the outcome of the choice with the dice roll
                    this.processOutcome();
                }, 1500);
            }

            showMotivationQuote() {
                const randomQuote = motivationQuotes[Math.floor(Math.random() * motivationQuotes.length)];
                document.getElementById('quote-text').textContent = randomQuote.text;
                document.getElementById('quote-author').textContent = `- ${randomQuote.author}`;
                document.getElementById('motivation-quote').style.display = 'block';
            }

            makeChoice(isSustainable) {
                if (!this.currentChallenge) return;

                document.getElementById('choose-sustainable').disabled = true;
                document.getElementById('choose-unsustainable').disabled = true;
                document.getElementById('roll-dice').disabled = false;

                const category = this.currentChallenge.category;
                const choice = isSustainable ? this.currentChallenge.sustainable : this.currentChallenge.unsustainable;
                
                // Track choice counts
                if (isSustainable) {
                    this.sustainableCount++;
                } else {
                    this.unsustainableCount++;
                    this.showWarningMessage();
                    this.updateUnsustainableTracker();
                }
                
                // Show educational information
                document.getElementById('info-content').textContent = choice.info;
                document.getElementById('impact-content').textContent = choice.impact;
                document.getElementById('educational-info').style.display = 'block';

                const buildingElement = document.getElementById(`${category}-building`);

                if (isSustainable) {
                    this.buildings[category].sustainable = true;
                    buildingElement.classList.add('sustainable');
                    buildingElement.classList.remove('unsustainable');
                    
                    // Update building status
                    document.getElementById(`${category}-status`).textContent = "Status: Sustainable";
                } else {
                    this.buildings[category].sustainable = false;
                    buildingElement.classList.add('unsustainable');
                    buildingElement.classList.remove('sustainable');
                    
                    // Update building status
                    document.getElementById(`${category}-status`).textContent = "Status: Needs improvement";
                }

                this.log(`${isSustainable ? 'Sustainable' : 'Unsustainable'} choice: ${choice.choice}`);
                this.updateDisplay();
            }

            processOutcome() {
                const category = this.currentChallenge.category;
                const isSustainable = this.buildings[category].sustainable;
                const choice = isSustainable ? this.currentChallenge.sustainable : this.currentChallenge.unsustainable;
                
                let pointsEarned = 0;

                if (isSustainable) {
                    pointsEarned = this.diceRoll * choice.points;
                    this.sustainabilityScore += pointsEarned;
                } else {
                    pointsEarned = Math.max(1, this.diceRoll * choice.points - 2); // Penalty for unsustainable
                    this.sustainabilityScore = Math.max(0, this.sustainabilityScore + pointsEarned);
                }

                this.points += pointsEarned;
                
                document.getElementById('card-result').textContent = 
                    `${isSustainable ? '✅ Sustainable choice!' : '❌ Unsustainable choice!'} Earned: ${pointsEarned} points.`;

                this.log(`Outcome: ${isSustainable ? 'Sustainable' : 'Unsustainable'} action resulted in ${pointsEarned} points.`);

                // Check win condition
                if (this.sustainabilityScore >= 100) {
                    this.winGame();
                }

                this.updateDisplay();
            }

            showWarningMessage() {
                document.getElementById('warning-message').style.display = 'block';
                
                // Auto-hide the warning after 5 seconds
                setTimeout(() => {
                    document.getElementById('warning-message').style.display = 'none';
                }, 5000);
            }

            updateUnsustainableTracker() {
                // Show visual indicator of unsustainable choices
                const dots = document.querySelectorAll('.unsustainable-dot');
                const activeDots = Math.min(this.unsustainableCount, 3);
                
                dots.forEach((dot, index) => {
                    if (index < activeDots) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });
            }

            log(message) {
                const logEntry = document.createElement('div');
                logEntry.className = 'log-entry';
                logEntry.innerHTML = `<span class="log-time">[${new Date().toLocaleTimeString()}]</span> ${message}`;
                this.logElement.appendChild(logEntry);
                this.logElement.scrollTop = this.logElement.scrollHeight;
            }

            updateDisplay() {
                document.getElementById('points').textContent = this.points;
                document.getElementById('turns').textContent = this.turns;
                document.getElementById('sustainable-count').textContent = this.sustainableCount;
                document.getElementById('unsustainable-count').textContent = this.unsustainableCount;
                document.getElementById('sustainability-score').textContent = `${this.sustainabilityScore}/100 points`;
                
                // Update sustainability meter
                const meterFill = document.getElementById('sustainability-meter');
                meterFill.style.width = `${Math.min(100, this.sustainabilityScore)}%`;
            }

            winGame() {
                this.log('🎉 Congratulations! Your town is fully sustainable. You win!');
                document.getElementById('final-points').textContent = this.points;
                document.getElementById('final-sustainable').textContent = this.sustainableCount;
                document.getElementById('final-unsustainable').textContent = this.unsustainableCount;
                document.getElementById('celebrate').style.display = 'flex';
                this.disableAllButtons();
            }

            disableAllButtons() {
                document.querySelectorAll('button').forEach(btn => btn.disabled = true);
                document.getElementById('new-turn').disabled = false; // Allow restart
                document.getElementById('new-turn').textContent = 'New Game';
                document.getElementById('new-turn').onclick = () => {
                    location.reload(); // Simple restart
                };
            }
        }

        // Initialize the game
        const game = new EcoTownGame();
    