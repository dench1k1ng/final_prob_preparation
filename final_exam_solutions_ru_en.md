# Statistics Final Exam: Full Solved Handbook (RU + EN)

Generated from the canonical dataset used by the web app.

## Variant 1

### Part A — Multiple Choice

#### Q1

**Prompt**: A researcher records the resting heart rates (in beats per minute) of 8 athletes and 8 non-athletes. When comparing their mean heart rates, which of the following is most appropriate?  
  
A. A two-sample z-test of population means  
B. A two-sample t-test of population means  
C. A one-sample z-test on a set of differences  
D. A one-sample t-test on a set of differences  
E. None of the above are appropriate.

**RU: Вычисление**
- Определяем ключевую тему задания (например: inference).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** This compares means from two independent groups (athletes vs non-athletes), so use a two-sample procedure. Population standard deviations are not given and sample sizes are small, so a two-sample t-test is appropriate (not z, and not paired). That matches option B.

**Final answer**: B

#### Q2

**Prompt**: A stemplot of exam scores shows that most values cluster between 70 and 80, with a few scores below 50. Which of the following is most likely true?  
  
A. The mean is greater than the median.  
B. The median is greater than the mean.  
C. The mean equals the median.  
D. The distribution is symmetric.  
E. The distribution is uniform.

**RU: Вычисление**
- Определяем ключевую тему задания (например: descriptive-stats).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** Most scores are around 70-80 with a tail toward lower values, so the distribution is left-skewed. In left skew, the mean is pulled downward below the median. Therefore the statement "median > mean" is the best choice, which is option B.

**Final answer**: B

#### Q3

**Prompt**: To estimate the average commute time for employees in a large company, a researcher selects every 10th employee from the company directory. This is an example of:  
  
A. Simple random sampling  
B. Cluster sampling  
C. Stratified sampling  
D. Systematic sampling  
E. Convenience sampling

**RU: Вычисление**
- Определяем ключевую тему задания (например: sampling-methods).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: D.

**EN: Explanation** Selecting every 10th employee is the definition of systematic sampling: pick units at a fixed interval after an initial start. It is not simple random, cluster, or stratified sampling. Hence option D is correct.

**Final answer**: D

#### Q4

**Prompt**: Which of the following is NOT true about the standard normal distribution?  
  
A. It has mean 0 and standard deviation 1.  
B. It is bell-shaped and symmetric.  
C. Approximately 95% of values fall within 2 standard deviations of the mean.  
D. It is a continuous distribution.  
E. The area under the curve is 2.

**RU: Вычисление**
- Определяем ключевую тему задания (например: distributions).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: E.

**EN: Explanation** A standard normal distribution is continuous, symmetric, centered at 0, with standard deviation 1, and total area under the curve equal to 1. The only false statement is "area is 2," so the NOT-true option is E.

**Final answer**: E

#### Q5

**Prompt**: The probability that a student passes Math is 0.70 and the probability that a student passes both Math and Science is 0.42. Given that the student passes Math, what is the probability of passing Science?  
  
A. 0.70 - 0.42  
B. 0.70 + 0.42  
C. 0.42 / 0.70  
D. 0.70 / 0.42  
E. 0.42 × 0.70

**RU: Вычисление**
- Определяем ключевую тему задания (например: probability-rules).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** Use conditional probability: P(Science | Math) = P(Science and Math) / P(Math). Substituting gives 0.42 / 0.70 = 0.60. The option expressing this setup is C.

**Final answer**: C

#### Q6

**Prompt**: Heights in a population are normally distributed with mean 170 cm and standard deviation 8 cm. What is the probability that a randomly selected person is taller than 186 cm?  
  
A. 0.0228  
B. 0.0456  
C. 0.9772  
D. 0.4772  
E. 0.1587

**RU: Вычисление**
- Определяем ключевую тему задания (например: normal-distribution).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: A.

**EN: Explanation** Standardize with z = (186 - 170) / 8 = 2. Then P(X > 186) = P(Z > 2) ≈ 0.0228 from the standard normal table. This corresponds to option A.

**Final answer**: A

#### Q7

**Prompt**: A researcher wants to estimate the difference in mean test scores between two groups within ±3 points with 95% confidence. Assuming equal standard deviations of 10, which formula should be used to find the minimum sample size per group?  
  
A. 1.96 × √(10²+10²)/√n ≤ 3  
B. 1.96 × √(10²+10²)/n ≤ 3  
C. 1.645 × √(10²+10²)/√n ≤ 3  
D. 1.96 × (10+10)/√n ≤ 3  
E. 1.96 × (10+10)/n ≤ 3

**RU: Вычисление**
- Определяем ключевую тему задания (например: confidence-interval).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: A.

**EN: Explanation** For a 95% margin requirement on a difference of two means with equal SDs, the margin form is z*sqrt(s1^2+s2^2)/sqrt(n). Set 1.96*sqrt(10^2+10^2)/sqrt(n) <= 3 and solve for n. That exact setup is option A.

**Final answer**: A

#### Q8

**Prompt**: Suppose the correlation between two variables is r = 0.65. If every value of the x-variable is multiplied by 3 and every value of the y-variable is decreased by 5, what is the new correlation?  
  
A. 0.65  
B. 1.95  
C. -0.65  
D. 0.217  
E. 0.43

**RU: Вычисление**
- Определяем ключевую тему задания (например: correlation).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: A.

**EN: Explanation** Correlation near +1 means a strong positive linear association, while correlation near 0 means weak linear association. Correlation does not establish causation. The option consistent with these facts is A.

**Final answer**: A

#### Q9

**Prompt**: A sample of 150 households showed 0 with no cars, 75 with one car, and 75 with two cars. The chi-square goodness-of-fit test is used to test if cars follow a binomial distribution with p = 0.5. What are the expected counts?  
  
A. Expected: 37.5, 75, 37.5  
B. Expected: 50, 50, 50  
C. Expected: 0, 75, 75  
D. Expected: 25, 100, 25  
E. Expected: 75, 75, 0

**RU: Вычисление**
- Определяем ключевую тему задания (например: chi-square).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: A.

**EN: Explanation** A chi-square test compares observed category counts to expected counts under a null model. The statistic sums (O-E)^2/E across categories and is right-tailed. The choice that describes this correctly is option A.

**Final answer**: A

#### Q10

**Prompt**: A company can invest in three projects. Project X guarantees $40,000. Project Y has a 60% chance of $80,000 and 40% chance of $0. Project Z has a 10% chance of $500,000 and 90% chance of $0. Which should the company choose to maximize expected return?  
  
A. Project X  
B. Project Y  
C. Project Z  
D. All have the same expected return.  
E. It depends on factors not given.

**RU: Вычисление**
- Определяем ключевую тему задания (например: expected-value).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** Expected value is the probability-weighted average: E(X)=sum x*p(x). You multiply each outcome by its probability and add, rather than averaging outcomes equally. The correct statement is option C.

**Final answer**: C

#### Q11

**Prompt**: A factory tests two production lines (Line 1 and Line 2) by randomly assigning batches to each line. A quality inspector rates each batch without knowing which line produced it. This study is best described as:  
  
A. A completely randomized design  
B. A randomized block design with the two lines as blocks  
C. A matched-pairs design  
D. An observational study  
E. A stratified random sample

**RU: Вычисление**
- Определяем ключевую тему задания (например: experimental-design).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: A.

**EN: Explanation** A well-designed experiment uses random assignment to treatment groups to balance confounders and support causal conclusions. Random sampling affects generalizability, not internal treatment comparison alone. The best answer is option A.

**Final answer**: A

#### Q12

**Prompt**: Residual plots from five regression analyses are examined. Which pattern in a residual plot provides the strongest evidence that a linear model is appropriate?  
  
A. A clear curve in the residuals  
B. Residuals with increasing spread as x increases  
C. Residuals randomly scattered around zero with no pattern  
D. Residuals that systematically decrease  
E. Residuals showing a strong linear trend

**RU: Вычисление**
- Определяем ключевую тему задания (например: regression).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** Residual = observed y - predicted y-hat. Positive residuals mean underprediction by the model, negative residuals mean overprediction. The option matching this interpretation is C.

**Final answer**: C

#### Q13

**Prompt**: For a sample of 60 dogs, the mean weight is 25 kg with a standard deviation of 8 kg. Which of the following is most likely true?  
  
A. The distribution is approximately normal because n = 60, and the Central Limit Theorem applies.  
B. The distribution is approximately normal because the standard deviation is less than the mean.  
C. The distribution is skewed right because the least possible weight is within 3 standard deviations of the mean.  
D. The distribution is skewed left because the least possible weight is within 3 standard deviations of the mean.  
E. The distribution has a median greater than the mean.

**RU: Вычисление**
- Определяем ключевую тему задания (например: shape).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** By the central limit theorem, the sampling distribution of the sample mean becomes approximately normal for sufficiently large n (under standard conditions), even if the population is non-normal. The correct choice is option C.

**Final answer**: C

#### Q14

**Prompt**: When conducting a large-sample test of H₀: p = p₀ for a single proportion, the test statistic uses p₀(1−p₀)/n in the denominator because:  
  
A. The standard deviation of p̂ is known when the null hypothesis is true.  
B. The standard deviation of p̂ is known when the alternative hypothesis is true.  
C. The sample size is large enough to approximate p₀.  
D. The standard deviation of p₀ is known when the null hypothesis is true.  
E. The standard deviation of p₀ is known when the alternative hypothesis is true.

**RU: Вычисление**
- Определяем ключевую тему задания (например: hypothesis-testing).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: A.

**EN: Explanation** In hypothesis testing, compare the p-value with alpha (or compare the test statistic with a critical threshold). Reject H0 only when evidence is strong enough under the null model. The option expressing this rule is A.

**Final answer**: A

#### Q15

**Prompt**: A telephone survey randomly dials numbers and only interviews respondents aged 25 or older. Which is NOT a legitimate concern?  
  
A. People aged 25–34 with only mobile phones may be underrepresented.  
B. People with unlisted numbers may be underrepresented.  
C. People with multiple phone numbers may be overrepresented.  
D. People living in rural areas may be underrepresented.  
E. People younger than 25 may bias the sample.

**RU: Вычисление**
- Определяем ключевую тему задания (например: bias).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: E.

**EN: Explanation** Bias is a systematic deviation caused by design or measurement issues, not random sampling fluctuation. Increasing sample size reduces random error but does not fix biased collection. Therefore option E is correct.

**Final answer**: E

#### Q16

**Prompt**: A device has four independent components with failure probabilities 0.02, 0.03, 0.05, and 0.04. The device fails if any component fails. What is the probability the device does not fail in one year?  
  
A. Less than 0.02  
B. 0.140  
C. 0.860  
D. 0.868  
E. Greater than 0.99

**RU: Вычисление**
- Определяем ключевую тему задания (например: independence).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: D.

**EN: Explanation** Independence means P(A and B)=P(A)P(B), equivalently P(A|B)=P(A) when P(B)>0. If this product rule fails, events are dependent. The option stating this criterion is D.

**Final answer**: D

#### Q17

**Prompt**: A 95% confidence interval for a population mean is (24.3, 31.7). What is the point estimate?  
  
A. 3.7  
B. 24.3  
C. 28.0  
D. 31.7  
E. It cannot be determined.

**RU: Вычисление**
- Определяем ключевую тему задания (например: confidence-interval).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** A confidence interval gives a plausible range for the population parameter based on sample data and method reliability. In repeated sampling, a 95% method captures the true parameter about 95% of the time. The correct interpretation here is option C.

**Final answer**: C

#### Q18

**Prompt**: When using a one-sample t-procedure, we require the population size to be at least 10 times the sample size in order to:  
  
A. Ensure the sample is large enough.  
B. Apply the Central Limit Theorem.  
C. Approximate the population standard deviation.  
D. Make observations approximately independent.  
E. Eliminate sampling bias.

**RU: Вычисление**
- Определяем ключевую тему задания (например: conditions).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: D.

**EN: Explanation** Before inference, check conditions such as randomness/independence and distribution or large-sample requirements for the chosen method. If assumptions fail badly, usual formulas may be invalid. The best option is D.

**Final answer**: D

#### Q19

**Prompt**: A lottery sells 2,000 tickets at $2 each. One ticket wins $500. The expected net gain per ticket is −$1.75. What does this mean?  
  
A. Ticket buyers lose an average of $0.25 per ticket.  
B. Ticket buyers lose an average of $1.75 per ticket.  
C. Each buyer will lose exactly $1.75.  
D. A buyer must buy 7 more tickets for expected gain to reach $0.  
E. A buyer has a 17.5% chance of being selected.

**RU: Вычисление**
- Определяем ключевую тему задания (например: expected-value).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** For repeated independent trials, expected total equals number of trials times expected single-trial outcome: E(total)=n*E(X). This linearity rule is fundamental and does not require normality. The option reflecting this is B.

**Final answer**: B

#### Q20

**Prompt**: Suppose H_a: μ < 50. For a fixed sample size and significance level, the power is greatest when the true mean is:  
  
A. 49  
B. 48  
C. 50  
D. 51  
E. 45

**RU: Вычисление**
- Определяем ключевую тему задания (например: power).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: E.

**EN: Explanation** Statistical power is P(reject H0 | H1 true): the chance a test detects a real effect. Power increases with larger effects, larger n, lower variability, and a more permissive alpha. The option defining this correctly is E.

**Final answer**: E

### Part B — Free Response

#### Q1

**Prompt**: A bag contains 5 red, 3 blue, and 2 green marbles. A player pays $3 to draw one marble at random and  
receives $10 for red, $4 for blue, and $0 for green.  
   (a) Let X represent the net gain for one play. Complete the probability distribution table for X.  
  
   (b) What is the expected value of X for one play?  
  
   (c) How many times must the game be played for the expected total net gain to reach at least $20?  
  
   (d) If the game is played 500 times, with mean net gain $0.70 and standard deviation $4.12, use the  
   normal distribution to approximate the probability that the total net gain is at least $400.

**RU: Вычисление**
- Определим чистый результат за игру: выигрыш игрока = выплата - стоимость.
- Исход 1: X=7, P=0.5.
- Исход 2: X=1, P=0.3.
- Исход 3: X=-3, P=0.2.
- Матожидание: E(X)=Σ x·p = 3.2.
- Для ожидаемого суммарного результата не менее 20: n·E(X) >= 20, значит n >= 6.25 -> минимально n=7.
- Для части (d): z = (400-350)/92.126 = 0.5427.
- P(T >= 400) = P(Z >= 0.5427) = 0.2937.

**EN: Explanation** Build the net-gain distribution first, then compute E(X). Use n*E(X) for the minimum plays threshold. In part (d), standardize the total gain with z=(T-mu)/sigma and read the upper-tail normal probability.

**Final answer**: Distribution: 7 (p=0.5), 1 (p=0.3), -3 (p=0.2); E(X)=3.2; min plays=7; P(total >= 400)≈0.2937

#### Q2

**Prompt**: A survey of 850 randomly selected high school students asked whether they preferred morning or  
evening study sessions. Of 850 students, 510 preferred evening. A previous survey found that 55% of  
students preferred evening study.  
   Do the data provide convincing evidence that the proportion of students who prefer evening study  
   has changed? Conduct a two-proportion z-test at the α = 0.05 level.

**RU: Вычисление**
- Гипотезы: H0: p=0.55, Ha: p != 0.55.
- p̂ = 510/850 = 0.6.
- SE0 = sqrt(p0(1-p0)/n) = 0.01706.
- z = (p̂-p0)/SE0 = 2.9302.
- Двустороннее p-value = 0.0034.
- Так как p-value < 0.05, отвергаем H0.

**EN: Explanation** Set null and alternative hypotheses for proportion(s), compute the z statistic using the null-based standard error, then compare the p-value to alpha=0.05.

**Final answer**: z=2.9302, p-value=0.0034 => Reject H0

#### Q3

**Prompt**: A biologist claims that a new fertilizer increases average plant height by at least 15%. Assume σ = 4.2  
cm is known from prior studies. How large a sample is needed to be 95% confident that the sample  
mean is within 1.5 cm of the population mean?

**RU: Вычисление**
- Используем формулу для известной σ: n=(z*σ/E)^2.
- Подставляем: n=(1.96*4.2/1.5)^2=30.1181.
- Округляем вверх: n=31.

**EN: Explanation** For a margin-of-error requirement with known sigma, use n=(z*sigma/E)^2 and round up.

**Final answer**: Required minimum sample size: n=31

#### Q4

**Prompt**: The weights of 800 packages are approximately normally distributed with mean 2.5 kg and standard  
deviation 0.3 kg. Suppose 100 random samples of size 16 are drawn.  
   (a) Find the mean and standard deviation of the sampling distribution of x̄.  
  
(b) Find the number of sample means that fall between 2.4 and 2.6 kg.  
  
(c) Find the number of sample means falling below 2.35 kg.

**RU: Вычисление**
- Параметры распределения выборочного среднего: μx̄=μ=2.5, σx̄=σ/√n=0.075.
- Для интервала [2.4, 2.6]: z1=-1.3333, z2=1.3333.
- P(2.4<=x̄<=2.6)=0.8176 => ожидаемое число = 81.76 (~82).
- Для порога 2.35: z=-2, вероятность=0.0228 => ожидаемое число=2.28 (~2).

**EN: Explanation** Use the sampling distribution of x-bar: mean mu and SD sigma/sqrt(n). Convert bounds to z-scores, compute normal probabilities, then multiply by the number of repeated samples.

**Final answer**: mu_xbar=2.5, sd_xbar=0.075; between count≈81.76; below 2.35 count≈2.28

## Variant 2

### Part A — Multiple Choice

#### Q1

**Prompt**: A study compares cholesterol levels of 10 patients before and after a diet program. The most appropriate test is:  
  
A. Two-sample z-test  
B. Two-sample t-test  
C. One-sample z-test on differences  
D. One-sample t-test on differences  
E. Chi-square test

**RU: Вычисление**
- Определяем ключевую тему задания (например: inference).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: D.

**EN: Explanation** This compares means from two independent groups (athletes vs non-athletes), so use a two-sample procedure. Population standard deviations are not given and sample sizes are small, so a two-sample t-test is appropriate (not z, and not paired). That matches option D.

**Final answer**: D

#### Q2

**Prompt**: A boxplot is right-skewed. Which statement is most likely true?  
  
A. Mean > Median  
B. Mean = Median  
C. Mean < Median  
D. Median = Mode  
E. The IQR is zero.

**RU: Вычисление**
- Определяем ключевую тему задания (например: descriptive-stats).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: A.

**EN: Explanation** Most scores are around 70-80 with a tail toward lower values, so the distribution is left-skewed. In left skew, the mean is pulled downward below the median. Therefore the statement "median > mean" is the best choice, which is option A.

**Final answer**: A

#### Q3

**Prompt**: A researcher surveys every employee in 5 randomly chosen departments out of 40 in a company. This is:  
  
A. Simple random sampling  
B. Systematic sampling  
C. Stratified sampling  
D. Cluster sampling  
E. Convenience sampling

**RU: Вычисление**
- Определяем ключевую тему задания (например: sampling-methods).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: D.

**EN: Explanation** Selecting every 10th employee is the definition of systematic sampling: pick units at a fixed interval after an initial start. It is not simple random, cluster, or stratified sampling. Hence option D is correct.

**Final answer**: D

#### Q4

**Prompt**: Which is NOT true about a t-distribution with 5 degrees of freedom compared to the standard normal?  
  
A. It is bell-shaped.  
B. It has heavier tails.  
C. It has mean 0.  
D. It has standard deviation 1.  
E. It is symmetric.

**RU: Вычисление**
- Определяем ключевую тему задания (например: distributions).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: D.

**EN: Explanation** A standard normal distribution is continuous, symmetric, centered at 0, with standard deviation 1, and total area under the curve equal to 1. The only false statement is "area is 2," so the NOT-true option is D.

**Final answer**: D

#### Q5

**Prompt**: P(A) = 0.4, P(B) = 0.3, and A and B are independent. What is P(A or B)?  
  
A. 0.12  
B. 0.58  
C. 0.70  
D. 0.42  
E. 0.28

**RU: Вычисление**
- Определяем ключевую тему задания (например: probability-rules).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** Use conditional probability: P(Science | Math) = P(Science and Math) / P(Math). Substituting gives 0.42 / 0.70 = 0.60. The option expressing this setup is B.

**Final answer**: B

#### Q6

**Prompt**: IQ scores are normally distributed with μ = 100 and σ = 15. What percent of people have IQ between 85 and 115?  
  
A. 34%  
B. 50%  
C. 68%  
D. 95%  
E. 99.7%

**RU: Вычисление**
- Определяем ключевую тему задания (например: normal-distribution).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** Standardize with z = (186 - 170) / 8 = 2. Then P(X > 186) = P(Z > 2) ≈ 0.0228 from the standard normal table. This corresponds to option C.

**Final answer**: C

#### Q7

**Prompt**: A researcher needs to estimate a difference in proportions to within 0.04 with 90% confidence. Using conservative estimate p = 0.5, the sample size per group should satisfy:  
  
A. 1.645√(0.5×0.5/n + 0.5×0.5/n) ≤ 0.04  
B. 1.96√(0.5×0.5/n + 0.5×0.5/n) ≤ 0.04  
C. 1.645(0.5+0.5)/√n ≤ 0.04  
D. 1.96(0.5+0.5)/n ≤ 0.04  
E. 1.645(0.5+0.5)/n ≤ 0.04

**RU: Вычисление**
- Определяем ключевую тему задания (например: confidence-interval).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: A.

**EN: Explanation** For a 95% margin requirement on a difference of two means with equal SDs, the margin form is z*sqrt(s1^2+s2^2)/sqrt(n). Set 1.96*sqrt(10^2+10^2)/sqrt(n) <= 3 and solve for n. That exact setup is option A.

**Final answer**: A

#### Q8

**Prompt**: If the correlation between x and y is 0.80, and every y-value is increased by 10, the new correlation is:  
  
A. 0.80  
B. 0.70  
C. 0.90  
D. 0.64  
E. 0.88

**RU: Вычисление**
- Определяем ключевую тему задания (например: correlation).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: A.

**EN: Explanation** Correlation near +1 means a strong positive linear association, while correlation near 0 means weak linear association. Correlation does not establish causation. The option consistent with these facts is A.

**Final answer**: A

#### Q9

**Prompt**: In a chi-square goodness-of-fit test with 4 categories and a sample of 200, the expected frequency for each category if equally likely is:  
  
A. 20  
B. 25  
C. 40  
D. 50  
E. 200

**RU: Вычисление**
- Определяем ключевую тему задания (например: chi-square).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: D.

**EN: Explanation** A chi-square test compares observed category counts to expected counts under a null model. The statistic sums (O-E)^2/E across categories and is right-tailed. The choice that describes this correctly is option D.

**Final answer**: D

#### Q10

**Prompt**: Option 1: guaranteed $15,000. Option 2: 40% chance of $30,000 and 60% chance of $5,000. Which has the higher expected value?  
  
A. Option 1  
B. Option 2  
C. They are equal.  
D. Depends on risk.  
E. Cannot be determined.

**RU: Вычисление**
- Определяем ключевую тему задания (например: expected-value).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** Expected value is the probability-weighted average: E(X)=sum x*p(x). You multiply each outcome by its probability and add, rather than averaging outcomes equally. The correct statement is option C.

**Final answer**: C

#### Q11

**Prompt**: Patients are randomly assigned to receive Drug A or Drug B. An evaluator who does not know which drug was administered rates patient improvement. This is best described as:  
  
A. Observational study  
B. Completely randomized design  
C. Matched-pairs design  
D. Randomized block design  
E. Stratified study

**RU: Вычисление**
- Определяем ключевую тему задания (например: experimental-design).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** A well-designed experiment uses random assignment to treatment groups to balance confounders and support causal conclusions. Random sampling affects generalizability, not internal treatment comparison alone. The best answer is option B.

**Final answer**: B

#### Q12

**Prompt**: A residual plot shows a funnel shape (spread increases with x). This suggests:  
  
A. Linear model is appropriate.  
B. Non-constant variance (heteroscedasticity).  
C. The data have outliers.  
D. The model overestimates at small x.  
E. The residuals are normally distributed.

**RU: Вычисление**
- Определяем ключевую тему задания (например: regression).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** Residual = observed y - predicted y-hat. Positive residuals mean underprediction by the model, negative residuals mean overprediction. The option matching this interpretation is B.

**Final answer**: B

#### Q13

**Prompt**: For a sample of 30 cats with mean lifespan 14 years and standard deviation 2 years, which is most likely true?  
  
A. Distribution is normal by CLT.  
B. Distribution is skewed right because minimum lifespan is within 7 standard deviations.  
C. Distribution is skewed left because minimum lifespan is within 7 standard deviations.  
D. Distribution is uniform.  
E. Distribution has median greater than mean.

**RU: Вычисление**
- Определяем ключевую тему задания (например: shape).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** By the central limit theorem, the sampling distribution of the sample mean becomes approximately normal for sufficiently large n (under standard conditions), even if the population is non-normal. The correct choice is option B.

**Final answer**: B

#### Q14

**Prompt**: In the z-test for a proportion, we use p₀ rather than p̂ in the denominator because:  
  
A. p̂ is unknown.  
B. We assume H₀ is true, so we use p₀.  
C. p̂ cannot be computed.  
D. p₀ is more accurate.  
E. The CLT does not apply.

**RU: Вычисление**
- Определяем ключевую тему задания (например: hypothesis-testing).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** In hypothesis testing, compare the p-value with alpha (or compare the test statistic with a critical threshold). Reject H0 only when evidence is strong enough under the null model. The option expressing this rule is B.

**Final answer**: B

#### Q15

**Prompt**: An online poll allows anyone to respond. The biggest concern is:  
  
A. Undercoverage of elderly people.  
B. Voluntary response bias.  
C. Non-response bias.  
D. Measurement error.  
E. Observer effect.

**RU: Вычисление**
- Определяем ключевую тему задания (например: bias).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** Bias is a systematic deviation caused by design or measurement issues, not random sampling fluctuation. Increasing sample size reduces random error but does not fix biased collection. Therefore option B is correct.

**Final answer**: B

#### Q16

**Prompt**: Two components fail independently with probabilities 0.05 and 0.08. The system works only if both work. P(system works) =  
  
A. 0.130  
B. 0.004  
C. 0.874  
D. 0.870  
E. 0.996

**RU: Вычисление**
- Определяем ключевую тему задания (например: independence).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** Independence means P(A and B)=P(A)P(B), equivalently P(A|B)=P(A) when P(B)>0. If this product rule fails, events are dependent. The option stating this criterion is C.

**Final answer**: C

#### Q17

**Prompt**: A 90% confidence interval for a proportion is (0.32, 0.48). The margin of error is:  
  
A. 0.32  
B. 0.08  
C. 0.40  
D. 0.16  
E. 0.48

**RU: Вычисление**
- Определяем ключевую тему задания (например: confidence-interval).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** A confidence interval gives a plausible range for the population parameter based on sample data and method reliability. In repeated sampling, a 95% method captures the true parameter about 95% of the time. The correct interpretation here is option B.

**Final answer**: B

#### Q18

**Prompt**: In a one-sample t-test, the assumption of normality is most critical when:  
  
A. n is large.  
B. n is small.  
C. σ is known.  
D. The sample is random.  
E. The population is large.

**RU: Вычисление**
- Определяем ключевую тему задания (например: conditions).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** Before inference, check conditions such as randomness/independence and distribution or large-sample requirements for the chosen method. If assumptions fail badly, usual formulas may be invalid. The best option is B.

**Final answer**: B

#### Q19

**Prompt**: A 50/50 raffle sells 500 tickets at $5. The top prize is $1,000. Expected net gain per ticket is −$3. This means:  
  
A. Buyers lose $2 on average per ticket.  
B. Buyers lose $3 on average per ticket.  
C. Each buyer loses exactly $3.  
D. Buying 3 more tickets makes gain zero.  
E. Buyer has 30% chance of winning.

**RU: Вычисление**
- Определяем ключевую тему задания (например: expected-value).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** For repeated independent trials, expected total equals number of trials times expected single-trial outcome: E(total)=n*E(X). This linearity rule is fundamental and does not require normality. The option reflecting this is B.

**Final answer**: B

#### Q20

**Prompt**: H_a: μ > 100. For fixed sample size and α, power is greatest when true μ is:  
  
A. 100  
B. 101  
C. 99  
D. 105  
E. 98

**RU: Вычисление**
- Определяем ключевую тему задания (например: power).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: D.

**EN: Explanation** Statistical power is P(reject H0 | H1 true): the chance a test detects a real effect. Power increases with larger effects, larger n, lower variability, and a more permissive alpha. The option defining this correctly is D.

**Final answer**: D

### Part B — Free Response

#### Q1

**Prompt**: A carnival game costs $4 to play. A player draws a ball from a bag of 10 balls (4 red worth $8, 4 blue  
worth $3, 2 yellow worth $0).  
   (a) Let X be the net gain. Complete the probability distribution of X.  
  
   (b) Find E(X).  
  
   (c) What is the minimum number of plays for the expected total net gain to be at least $30?  
  
   (d) In 400 plays, mean total net gain is $80 and standard deviation is $200. Use the normal  
   distribution to find the probability that total gain exceeds $120.

**RU: Вычисление**
- Определим чистый результат за игру: выигрыш игрока = выплата - стоимость.
- Исход 1: X=4, P=0.4.
- Исход 2: X=-1, P=0.4.
- Исход 3: X=-4, P=0.2.
- Матожидание: E(X)=Σ x·p = 0.4.
- Для ожидаемого суммарного результата не менее 30: n·E(X) >= 30, значит n >= 75 -> минимально n=75.
- Для части (d): z = (120-80)/200 = 0.2.
- P(T >= 120) = P(Z >= 0.2) = 0.4207.

**EN: Explanation** Build the net-gain distribution first, then compute E(X). Use n*E(X) for the minimum plays threshold. In part (d), standardize the total gain with z=(T-mu)/sigma and read the upper-tail normal probability.

**Final answer**: Distribution: 4 (p=0.4), -1 (p=0.4), -4 (p=0.2); E(X)=0.4; min plays=75; P(total >= 120)≈0.4207

#### Q2

**Prompt**: A survey in 2023 found that 480 out of 800 randomly chosen adults use social media daily. A 2022  
survey found 420 out of 700 adults used social media daily.  
   Test whether the proportion of adults who use social media daily changed from 2022 to 2023. Use α  
   = 0.05.

**RU: Вычисление**
- Гипотезы: H0: p1=p2, Ha: p1 != p2.
- p1̂=480/800=0.6, p2̂=420/700=0.6.
- Объединённая оценка p̂=0.6.
- SE = sqrt(p̂(1-p̂)(1/n1+1/n2)) = 0.02535.
- z = (p1̂-p2̂)/SE = 0.
- Двустороннее p-value = 1; не отвергаем H0.

**EN: Explanation** Set null and alternative hypotheses for proportion(s), compute the z statistic using the null-based standard error, then compare the p-value to alpha=0.05.

**Final answer**: p1=0.6, p2=0.6, z=0, p-value=1 => Fail to reject H0

#### Q3

**Prompt**: A researcher wants to estimate the mean recovery time for patients on a new medication. From past  
studies, σ = 6.5 days. How many patients must be sampled to be 99% confident the estimate is within 2  
days of the true mean?

**RU: Вычисление**
- Используем формулу для известной σ: n=(z*σ/E)^2.
- Подставляем: n=(2.576*6.5/2)^2=70.0904.
- Округляем вверх: n=71.

**EN: Explanation** For a margin-of-error requirement with known sigma, use n=(z*sigma/E)^2 and round up.

**Final answer**: Required minimum sample size: n=71

#### Q4

**Prompt**: Test scores for 500 students are approximately normally distributed with mean 72 and standard  
deviation 9. Suppose 80 random samples of size 20 are drawn.  
   (a) Find the mean and standard deviation of the sampling distribution of x̄.  
  
   (b) How many sample means fall between 70 and 74?  
  
(c) How many sample means fall above 75?

**RU: Вычисление**
- Параметры распределения выборочного среднего: μx̄=μ=72, σx̄=σ/√n=2.01246.
- Для интервала [70, 74]: z1=-0.9938, z2=0.9938.
- P(70<=x̄<=74)=0.6797 => ожидаемое число = 54.37 (~54).
- Для порога 75: z=1.4907, вероятность=0.068 => ожидаемое число=5.44 (~5).

**EN: Explanation** Use the sampling distribution of x-bar: mean mu and SD sigma/sqrt(n). Convert bounds to z-scores, compute normal probabilities, then multiply by the number of repeated samples.

**Final answer**: mu_xbar=72, sd_xbar=2.01246; between count≈54.37; above 75 count≈5.44

## Variant 3

### Part A — Multiple Choice

#### Q1

**Prompt**: A teacher wants to compare exam scores of students who studied with music vs. without music using groups of 15 each. The appropriate test is:  
  
A. Paired t-test  
B. Two-sample t-test  
C. Two-sample z-test  
D. One-proportion z-test  
E. Chi-square test

**RU: Вычисление**
- Определяем ключевую тему задания (например: inference).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** This compares means from two independent groups (athletes vs non-athletes), so use a two-sample procedure. Population standard deviations are not given and sample sizes are small, so a two-sample t-test is appropriate (not z, and not paired). That matches option B.

**Final answer**: B

#### Q2

**Prompt**: A distribution has mean 50 and median 60. The distribution is:  
  
A. Symmetric  
B. Skewed right  
C. Skewed left  
D. Uniform  
E. Bimodal

**RU: Вычисление**
- Определяем ключевую тему задания (например: descriptive-stats).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** Most scores are around 70-80 with a tail toward lower values, so the distribution is left-skewed. In left skew, the mean is pulled downward below the median. Therefore the statement "median > mean" is the best choice, which is option C.

**Final answer**: C

#### Q3

**Prompt**: To survey opinions of 1,000 employees, a researcher divides them into departments and randomly selects proportional numbers from each department. This is:  
  
A. Simple random sampling  
B. Cluster sampling  
C. Stratified sampling  
D. Systematic sampling  
E. Voluntary response sampling

**RU: Вычисление**
- Определяем ключевую тему задания (например: sampling-methods).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** Selecting every 10th employee is the definition of systematic sampling: pick units at a fixed interval after an initial start. It is not simple random, cluster, or stratified sampling. Hence option C is correct.

**Final answer**: C

#### Q4

**Prompt**: As degrees of freedom increase, the t-distribution:  
  
A. Becomes more skewed  
B. Approaches the standard normal distribution  
C. Becomes wider  
D. Has decreasing mean  
E. Has standard deviation less than 1

**RU: Вычисление**
- Определяем ключевую тему задания (например: distributions).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** A standard normal distribution is continuous, symmetric, centered at 0, with standard deviation 1, and total area under the curve equal to 1. The only false statement is "area is 2," so the NOT-true option is B.

**Final answer**: B

#### Q5

**Prompt**: P(A) = 0.5, P(B|A) = 0.4. What is P(A and B)?  
  
A. 0.20  
B. 0.40  
C. 0.80  
D. 0.10  
E. 0.90

**RU: Вычисление**
- Определяем ключевую тему задания (например: probability-rules).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: A.

**EN: Explanation** Use conditional probability: P(Science | Math) = P(Science and Math) / P(Math). Substituting gives 0.42 / 0.70 = 0.60. The option expressing this setup is A.

**Final answer**: A

#### Q6

**Prompt**: A normal distribution has μ = 500 and σ = 100. What is the probability of a value below 350?  
  
A. 0.0668  
B. 0.1587  
C. 0.9332  
D. 0.0228  
E. 0.0013

**RU: Вычисление**
- Определяем ключевую тему задания (например: normal-distribution).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: A.

**EN: Explanation** Standardize with z = (186 - 170) / 8 = 2. Then P(X > 186) = P(Z > 2) ≈ 0.0228 from the standard normal table. This corresponds to option A.

**Final answer**: A

#### Q7

**Prompt**: A researcher uses a 99% confidence interval to estimate a mean, with σ = 12. To have margin of error ≤ 3, which condition must hold?  
  
A. 2.576 × 12/√n ≤ 3  
B. 1.96 × 12/√n ≤ 3  
C. 2.576 × 12/n ≤ 3  
D. 1.645 × 12/√n ≤ 3  
E. 2.576 × √12/n ≤ 3

**RU: Вычисление**
- Определяем ключевую тему задания (например: confidence-interval).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: A.

**EN: Explanation** For a 95% margin requirement on a difference of two means with equal SDs, the margin form is z*sqrt(s1^2+s2^2)/sqrt(n). Set 1.96*sqrt(10^2+10^2)/sqrt(n) <= 3 and solve for n. That exact setup is option A.

**Final answer**: A

#### Q8

**Prompt**: The correlation between study hours and test scores is 0.72. If all test scores are divided by 10, the new correlation is:  
  
A. 0.072  
B. 7.2  
C. 0.72  
D. −0.72  
E. 0.52

**RU: Вычисление**
- Определяем ключевую тему задания (например: correlation).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** Correlation near +1 means a strong positive linear association, while correlation near 0 means weak linear association. Correlation does not establish causation. The option consistent with these facts is C.

**Final answer**: C

#### Q9

**Prompt**: In a chi-square test for independence with a 3×4 table, the degrees of freedom are:  
  
A. 12  
B. 11  
C. 6  
D. 7  
E. 3

**RU: Вычисление**
- Определяем ключевую тему задания (например: chi-square).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** A chi-square test compares observed category counts to expected counts under a null model. The statistic sums (O-E)^2/E across categories and is right-tailed. The choice that describes this correctly is option C.

**Final answer**: C

#### Q10

**Prompt**: A game has expected payout −$0.50. A player plays 100 times. Expected total loss is:  
  
A. $0.50  
B. $5.00  
C. $50.00  
D. $500.00  
E. $0.005

**RU: Вычисление**
- Определяем ключевую тему задания (например: expected-value).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** Expected value is the probability-weighted average: E(X)=sum x*p(x). You multiply each outcome by its probability and add, rather than averaging outcomes equally. The correct statement is option C.

**Final answer**: C

#### Q11

**Prompt**: In a double-blind experiment, which of the following is true?  
  
A. Only the researcher knows the treatments.  
B. Only the subjects know the treatments.  
C. Neither the subjects nor the evaluators know the treatments.  
D. The treatments are known to everyone.  
E. Subjects choose their own treatment.

**RU: Вычисление**
- Определяем ключевую тему задания (например: experimental-design).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** A well-designed experiment uses random assignment to treatment groups to balance confounders and support causal conclusions. Random sampling affects generalizability, not internal treatment comparison alone. The best answer is option C.

**Final answer**: C

#### Q12

**Prompt**: A residual plot shows points randomly scattered above and below zero. This indicates:  
  
A. Non-linearity  
B. Heteroscedasticity  
C. The linear model is appropriate.  
D. Outliers are present.  
E. The model is poor.

**RU: Вычисление**
- Определяем ключевую тему задания (например: regression).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** Residual = observed y - predicted y-hat. Positive residuals mean underprediction by the model, negative residuals mean overprediction. The option matching this interpretation is C.

**Final answer**: C

#### Q13

**Prompt**: For a sample of 25 values with mean 100 and standard deviation 30, the distribution of the sample is likely:  
  
A. Normal by CLT  
B. Skewed right because min is within 3.3 SD of mean  
C. Skewed left because min is within 3.3 SD of mean  
D. Uniform  
E. The same as the population

**RU: Вычисление**
- Определяем ключевую тему задания (например: shape).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** By the central limit theorem, the sampling distribution of the sample mean becomes approximately normal for sufficiently large n (under standard conditions), even if the population is non-normal. The correct choice is option B.

**Final answer**: B

#### Q14

**Prompt**: The denominator in the one-proportion z-test statistic uses p₀ because:  
  
A. p̂ is always unknown  
B. Under H₀ we assume p = p₀, so we use its standard error  
C. p₀ is always greater than p̂  
D. The CLT requires it  
E. Sample size must be large

**RU: Вычисление**
- Определяем ключевую тему задания (например: hypothesis-testing).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** In hypothesis testing, compare the p-value with alpha (or compare the test statistic with a critical threshold). Reject H0 only when evidence is strong enough under the null model. The option expressing this rule is B.

**Final answer**: B

#### Q15

**Prompt**: A mall intercept survey asks shoppers their opinions. The most serious source of bias is:  
  
A. Response bias  
B. Undercoverage  
C. Non-response bias  
D. Observer bias  
E. Sampling bias

**RU: Вычисление**
- Определяем ключевую тему задания (например: bias).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: E.

**EN: Explanation** Bias is a systematic deviation caused by design or measurement issues, not random sampling fluctuation. Increasing sample size reduces random error but does not fix biased collection. Therefore option E is correct.

**Final answer**: E

#### Q16

**Prompt**: Three independent components have reliability (probability of working) 0.95, 0.90, and 0.85. The system works if all three work. P(system works) =  
  
A. 0.726  
B. 0.274  
C. 0.770  
D. 0.900  
E. 0.950

**RU: Вычисление**
- Определяем ключевую тему задания (например: independence).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: A.

**EN: Explanation** Independence means P(A and B)=P(A)P(B), equivalently P(A|B)=P(A) when P(B)>0. If this product rule fails, events are dependent. The option stating this criterion is A.

**Final answer**: A

#### Q17

**Prompt**: A confidence interval is (42, 58). The margin of error is:  
  
A. 42  
B. 8  
C. 58  
D. 16  
E. 50

**RU: Вычисление**
- Определяем ключевую тему задания (например: confidence-interval).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** A confidence interval gives a plausible range for the population parameter based on sample data and method reliability. In repeated sampling, a 95% method captures the true parameter about 95% of the time. The correct interpretation here is option B.

**Final answer**: B

#### Q18

**Prompt**: Which condition is needed to use a one-sample t-test?  
  
A. Population must be exactly normal.  
B. Population standard deviation must be known.  
C. Sample must come from approximately normal population or n must be large.  
D. n must be at least 100.  
E. Population must be finite.

**RU: Вычисление**
- Определяем ключевую тему задания (например: conditions).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** Before inference, check conditions such as randomness/independence and distribution or large-sample requirements for the chosen method. If assumptions fail badly, usual formulas may be invalid. The best option is C.

**Final answer**: C

#### Q19

**Prompt**: A nonprofit sells 500 raffle tickets at $10 each. One prize of $1,500 is awarded. Expected net gain per ticket is −$7. This means:  
  
A. Buyers lose $3 on average.  
B. Buyers lose $7 on average.  
C. Every buyer loses exactly $7.  
D. Buying 7 more tickets makes gain zero.  
E. Chance of winning is 70%.

**RU: Вычисление**
- Определяем ключевую тему задания (например: expected-value).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** For repeated independent trials, expected total equals number of trials times expected single-trial outcome: E(total)=n*E(X). This linearity rule is fundamental and does not require normality. The option reflecting this is B.

**Final answer**: B

#### Q20

**Prompt**: H_a: μ ≠ 25. For fixed n and α, the power is maximized when the true mean is:  
  
A. 25  
B. Closest to 25  
C. Farthest from 25  
D. Equal to the null  
E. Equal to α

**RU: Вычисление**
- Определяем ключевую тему задания (например: power).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** Statistical power is P(reject H0 | H1 true): the chance a test detects a real effect. Power increases with larger effects, larger n, lower variability, and a more permissive alpha. The option defining this correctly is C.

**Final answer**: C

### Part B — Free Response

#### Q1

**Prompt**: A game uses a spinner with 8 equal sections: 2 sections labeled $5, 3 sections labeled $1, and 3  
sections labeled $0. The cost to play is $2.  
   (a) Let X be the net gain. Complete the probability distribution of X.  
  
   (b) Calculate E(X).  
  
   (c) What is the fewest number of plays needed so the expected total net gain is at least $25?  
  
   (d) In 600 plays, the mean total net gain is $180 and standard deviation is $300. Approximate the  
   probability that total net gain is at least $250.

**RU: Вычисление**
- Определим чистый результат за игру: выигрыш игрока = выплата - стоимость.
- Исход 1: X=3, P=0.25.
- Исход 2: X=-1, P=0.375.
- Исход 3: X=-2, P=0.375.
- Матожидание: E(X)=Σ x·p = -0.375.
- Для ожидаемого суммарного результата не менее 25: n·E(X) >= 25, значит n >= -66.6667 -> минимально n=-66.
- Для части (d): z = (250-180)/300 = 0.2333.
- P(T >= 250) = P(Z >= 0.2333) = 0.4078.

**EN: Explanation** Build the net-gain distribution first, then compute E(X). Use n*E(X) for the minimum plays threshold. In part (d), standardize the total gain with z=(T-mu)/sigma and read the upper-tail normal probability.

**Final answer**: Distribution: 3 (p=0.25), -1 (p=0.375), -2 (p=0.375); E(X)=-0.375; min plays=-66; P(total >= 250)≈0.4078

#### Q2

**Prompt**: In 2024, 390 out of 600 randomly selected adults reported exercising regularly. In 2022, 310 out of 550  
adults reported the same.  
   Does the data provide evidence that the proportion changed between 2022 and 2024? Test at α =  
   0.05.

**RU: Вычисление**
- Гипотезы: H0: p1=p2, Ha: p1 != p2.
- p1̂=390/600=0.65, p2̂=310/550=0.5636.
- Объединённая оценка p̂=0.6087.
- SE = sqrt(p̂(1-p̂)(1/n1+1/n2)) = 0.02881.
- z = (p1̂-p2̂)/SE = 2.9977.
- Двустороннее p-value = 0.0027; отвергаем H0.

**EN: Explanation** Set null and alternative hypotheses for proportion(s), compute the z statistic using the null-based standard error, then compare the p-value to alpha=0.05.

**Final answer**: p1=0.65, p2=0.5636, z=2.9977, p-value=0.0027 => Reject H0

#### Q3

**Prompt**: A nutritionist claims that the average caloric intake of adults can be estimated. Assume σ = 220  
calories. How many adults must be sampled to be 95% confident the estimate is within 50 calories of  
the true mean?

**RU: Вычисление**
- Используем формулу для известной σ: n=(z*σ/E)^2.
- Подставляем: n=(1.96*220/50)^2=74.3734.
- Округляем вверх: n=75.

**EN: Explanation** For a margin-of-error requirement with known sigma, use n=(z*sigma/E)^2 and round up.

**Final answer**: Required minimum sample size: n=75

#### Q4

**Prompt**: Reaction times of 600 drivers are approximately normally distributed with mean 0.45 seconds and  
standard deviation 0.08 seconds. 150 random samples of size 30 are drawn.  
   (a) Find the mean and standard deviation of the sampling distribution of x̄.  
  
   (b) How many sample means fall between 0.43 and 0.47 seconds?  
  
(c) How many sample means fall above 0.48 seconds?

**RU: Вычисление**
- Параметры распределения выборочного среднего: μx̄=μ=0.45, σx̄=σ/√n=0.01461.
- Для интервала [0.43, 0.47]: z1=-1.3693, z2=1.3693.
- P(0.43<=x̄<=0.47)=0.8291 => ожидаемое число = 124.36 (~124).
- Для порога 0.48: z=2.054, вероятность=0.02 => ожидаемое число=3 (~3).

**EN: Explanation** Use the sampling distribution of x-bar: mean mu and SD sigma/sqrt(n). Convert bounds to z-scores, compute normal probabilities, then multiply by the number of repeated samples.

**Final answer**: mu_xbar=0.45, sd_xbar=0.01461; between count≈124.36; above 0.48 count≈3

## Variant 4

### Part A — Multiple Choice

#### Q1

**Prompt**: A researcher measures blood pressure of 12 patients before and after a treatment. The most appropriate test is:  
  
A. Two-sample z-test  
B. Two-sample t-test  
C. Paired t-test  
D. One-proportion z-test  
E. Chi-square test

**RU: Вычисление**
- Определяем ключевую тему задания (например: inference).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** This compares means from two independent groups (athletes vs non-athletes), so use a two-sample procedure. Population standard deviations are not given and sample sizes are small, so a two-sample t-test is appropriate (not z, and not paired). That matches option C.

**Final answer**: C

#### Q2

**Prompt**: A dataset has mean 75 and median 70. The distribution is most likely:  
  
A. Symmetric  
B. Skewed left  
C. Skewed right  
D. Uniform  
E. Normal

**RU: Вычисление**
- Определяем ключевую тему задания (например: descriptive-stats).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** Most scores are around 70-80 with a tail toward lower values, so the distribution is left-skewed. In left skew, the mean is pulled downward below the median. Therefore the statement "median > mean" is the best choice, which is option C.

**Final answer**: C

#### Q3

**Prompt**: Researchers select a sample from a list by choosing randomly from each of five age groups proportionally. This method is:  
  
A. Cluster sampling  
B. Simple random sampling  
C. Stratified sampling  
D. Systematic sampling  
E. Voluntary response

**RU: Вычисление**
- Определяем ключевую тему задания (например: sampling-methods).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** Selecting every 10th employee is the definition of systematic sampling: pick units at a fixed interval after an initial start. It is not simple random, cluster, or stratified sampling. Hence option C is correct.

**Final answer**: C

#### Q4

**Prompt**: Which statement is TRUE about t-distributions?  
  
A. They have standard deviation less than 1 for all df.  
B. They become closer to the normal as df increases.  
C. They are not symmetric.  
D. They have a mean different from 0.  
E. They do not depend on df.

**RU: Вычисление**
- Определяем ключевую тему задания (например: distributions).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** A standard normal distribution is continuous, symmetric, centered at 0, with standard deviation 1, and total area under the curve equal to 1. The only false statement is "area is 2," so the NOT-true option is B.

**Final answer**: B

#### Q5

**Prompt**: Events A and B are mutually exclusive. P(A) = 0.3, P(B) = 0.4. P(A or B) =  
  
A. 0.12  
B. 0.70  
C. 0.58  
D. 0.10  
E. 1.0

**RU: Вычисление**
- Определяем ключевую тему задания (например: probability-rules).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** Use conditional probability: P(Science | Math) = P(Science and Math) / P(Math). Substituting gives 0.42 / 0.70 = 0.60. The option expressing this setup is B.

**Final answer**: B

#### Q6

**Prompt**: A distribution is N(80, 10). What is the z-score for x = 95?  
  
A. 1.0  
B. 1.5  
C. 2.0  
D. 0.5  
E. −1.5

**RU: Вычисление**
- Определяем ключевую тему задания (например: normal-distribution).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** Standardize with z = (186 - 170) / 8 = 2. Then P(X > 186) = P(Z > 2) ≈ 0.0228 from the standard normal table. This corresponds to option B.

**Final answer**: B

#### Q7

**Prompt**: To estimate a population proportion within 0.03 with 95% confidence, using p = 0.5, which holds?  
  
A. n ≥ (1.96)²(0.25)/(0.03)²  
B. n ≥ (1.645)²(0.25)/(0.03)²  
C. n ≥ (1.96)²(0.5)/(0.03)²  
D. n ≥ (1.96)(0.25)/(0.03)  
E. n ≥ (1.96)²(0.25)/(0.03)

**RU: Вычисление**
- Определяем ключевую тему задания (например: confidence-interval).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: A.

**EN: Explanation** For a 95% margin requirement on a difference of two means with equal SDs, the margin form is z*sqrt(s1^2+s2^2)/sqrt(n). Set 1.96*sqrt(10^2+10^2)/sqrt(n) <= 3 and solve for n. That exact setup is option A.

**Final answer**: A

#### Q8

**Prompt**: If r = −0.45 between x and y, and all y-values are multiplied by −1, the new correlation is:  
  
A. −0.45  
B. 0.45  
C. 0.00  
D. 0.90  
E. −0.90

**RU: Вычисление**
- Определяем ключевую тему задания (например: correlation).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** Correlation near +1 means a strong positive linear association, while correlation near 0 means weak linear association. Correlation does not establish causation. The option consistent with these facts is B.

**Final answer**: B

#### Q9

**Prompt**: A goodness-of-fit test has 5 categories and all expected counts are equal. If observed counts are 18, 22, 20, 25, 15, what is the expected count per category?  
  
A. 18  
B. 20  
C. 22  
D. 25  
E. 100

**RU: Вычисление**
- Определяем ключевую тему задания (например: chi-square).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** A chi-square test compares observed category counts to expected counts under a null model. The statistic sums (O-E)^2/E across categories and is right-tailed. The choice that describes this correctly is option B.

**Final answer**: B

#### Q10

**Prompt**: Two investment options: Option A has expected return $12,000; Option B has 30% chance of $50,000 and 70% chance of $0. Which has the higher expected value?  
  
A. Option A  
B. Option B  
C. Equal  
D. Cannot compare  
E. Depends on risk

**RU: Вычисление**
- Определяем ключевую тему задания (например: expected-value).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** Expected value is the probability-weighted average: E(X)=sum x*p(x). You multiply each outcome by its probability and add, rather than averaging outcomes equally. The correct statement is option B.

**Final answer**: B

#### Q11

**Prompt**: Subjects are randomly assigned to one of three diet plans. Food intake is tracked over 8 weeks. This study is:  
  
A. Observational study  
B. Matched-pairs design  
C. Randomized block design  
D. Completely randomized design  
E. Case-control study

**RU: Вычисление**
- Определяем ключевую тему задания (например: experimental-design).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: D.

**EN: Explanation** A well-designed experiment uses random assignment to treatment groups to balance confounders and support causal conclusions. Random sampling affects generalizability, not internal treatment comparison alone. The best answer is option D.

**Final answer**: D

#### Q12

**Prompt**: In a residual plot, all points lie exactly on a straight line with positive slope. This indicates:  
  
A. Perfect fit  
B. Non-linearity not captured  
C. Constant variance  
D. Linear model is appropriate  
E. The model is wrong

**RU: Вычисление**
- Определяем ключевую тему задания (например: regression).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: E.

**EN: Explanation** Residual = observed y - predicted y-hat. Positive residuals mean underprediction by the model, negative residuals mean overprediction. The option matching this interpretation is E.

**Final answer**: E

#### Q13

**Prompt**: A sample of 20 observations has mean 50 and standard deviation 15. Which is most likely true about the sample?  
  
A. Normal by CLT  
B. Skewed right, minimum within 3.3 SD  
C. Skewed left, minimum within 3.3 SD  
D. Uniform  
E. Bimodal

**RU: Вычисление**
- Определяем ключевую тему задания (например: shape).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** By the central limit theorem, the sampling distribution of the sample mean becomes approximately normal for sufficiently large n (under standard conditions), even if the population is non-normal. The correct choice is option B.

**Final answer**: B

#### Q14

**Prompt**: When the null hypothesis in a proportion test is p = 0.6, the standard error in the denominator uses 6 because:  
  
A. 0.6 is the most common value.  
B. We calculate standard deviation under the assumption H₀ is true.  
C. The sample proportion equals 0.6.  
D. 0.6 maximizes the variance.  
E. The sample size is large.

**RU: Вычисление**
- Определяем ключевую тему задания (например: hypothesis-testing).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** In hypothesis testing, compare the p-value with alpha (or compare the test statistic with a critical threshold). Reject H0 only when evidence is strong enough under the null model. The option expressing this rule is B.

**Final answer**: B

#### Q15

**Prompt**: Which source of bias occurs when survey participants self-select into a sample?  
  
A. Undercoverage bias  
B. Measurement bias  
C. Voluntary response bias  
D. Non-response bias  
E. Observer bias

**RU: Вычисление**
- Определяем ключевую тему задания (например: bias).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** Bias is a systematic deviation caused by design or measurement issues, not random sampling fluctuation. Increasing sample size reduces random error but does not fix biased collection. Therefore option C is correct.

**Final answer**: C

#### Q16

**Prompt**: P(A) = 0.7, P(B) = 0.6, P(A and B) = 0.42. Are A and B independent?  
  
A. Yes, because P(A)×P(B) = 0.42 = P(A and B).  
B. No, because they are not mutually exclusive.  
C. Yes, because P(A|B) = P(A).  
D. No, because P(A and B) ≠ 0.  
E. Cannot be determined.

**RU: Вычисление**
- Определяем ключевую тему задания (например: independence).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: A.

**EN: Explanation** Independence means P(A and B)=P(A)P(B), equivalently P(A|B)=P(A) when P(B)>0. If this product rule fails, events are dependent. The option stating this criterion is A.

**Final answer**: A

#### Q17

**Prompt**: A 98% confidence interval for a mean is (55.2, 64.8). The sample mean is:  
  
A. 55.2  
B. 64.8  
C. 60.0  
D. 4.8  
E. 9.6

**RU: Вычисление**
- Определяем ключевую тему задания (например: confidence-interval).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** A confidence interval gives a plausible range for the population parameter based on sample data and method reliability. In repeated sampling, a 95% method captures the true parameter about 95% of the time. The correct interpretation here is option C.

**Final answer**: C

#### Q18

**Prompt**: Which assumption is critical for a chi-square test of independence?  
  
A. Large sample size only  
B. Expected counts ≥ 5 in each cell  
C. Normal distribution of data  
D. Equal sample sizes  
E. Known population variance

**RU: Вычисление**
- Определяем ключевую тему задания (например: conditions).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** Before inference, check conditions such as randomness/independence and distribution or large-sample requirements for the chosen method. If assumptions fail badly, usual formulas may be invalid. The best option is B.

**Final answer**: B

#### Q19

**Prompt**: A game sells 1,000 tickets at $3. Two prizes of $500 each are awarded. The expected net gain per ticket is −$2. This means:  
  
A. Buyers gain $1 on average.  
B. Buyers lose $1 on average.  
C. Buyers lose $2 on average.  
D. Every buyer loses exactly $2.  
E. Chance of winning is 20%.

**RU: Вычисление**
- Определяем ключевую тему задания (например: expected-value).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** For repeated independent trials, expected total equals number of trials times expected single-trial outcome: E(total)=n*E(X). This linearity rule is fundamental and does not require normality. The option reflecting this is C.

**Final answer**: C

#### Q20

**Prompt**: H_a: μ > 30. The power of the test increases when:  
  
A. The true mean decreases toward 30.  
B. The sample size decreases.  
C. The significance level decreases.  
D. The true mean increases above 30.  
E. The standard deviation increases.

**RU: Вычисление**
- Определяем ключевую тему задания (например: power).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: D.

**EN: Explanation** Statistical power is P(reject H0 | H1 true): the chance a test detects a real effect. Power increases with larger effects, larger n, lower variability, and a more permissive alpha. The option defining this correctly is D.

**Final answer**: D

### Part B — Free Response

#### Q1

**Prompt**: A game show host offers a wheel with 12 equal sectors: 3 labeled $20, 4 labeled $5, 5 labeled $0. A  
contestant pays $8 to spin once.  
   (a) Let X be the net gain. Complete the probability distribution of X.  
  
   (b) Find E(X).  
  
   (c) What is the minimum number of spins for the expected total net gain to be at least $15?  
  
   (d) In 800 spins, the mean total net gain is $400 and standard deviation is $480. Use the normal  
   distribution to find the probability that total net gain exceeds $500.

**RU: Вычисление**
- Определим чистый результат за игру: выигрыш игрока = выплата - стоимость.
- Исход 1: X=12, P=0.25.
- Исход 2: X=-3, P=0.3333.
- Исход 3: X=-8, P=0.4167.
- Матожидание: E(X)=Σ x·p = -1.3333.
- Для ожидаемого суммарного результата не менее 15: n·E(X) >= 15, значит n >= -11.25 -> минимально n=-11.
- Для части (d): z = (500-400)/480 = 0.2083.
- P(T >= 500) = P(Z >= 0.2083) = 0.4175.

**EN: Explanation** Build the net-gain distribution first, then compute E(X). Use n*E(X) for the minimum plays threshold. In part (d), standardize the total gain with z=(T-mu)/sigma and read the upper-tail normal probability.

**Final answer**: Distribution: 12 (p=0.25), -3 (p=0.3333), -8 (p=0.4167); E(X)=-1.3333; min plays=-11; P(total >= 500)≈0.4175

#### Q2

**Prompt**: In January 2024, 530 of 1,000 randomly selected voters said they approved of a new policy. In January  
2023, 480 of 900 said the same.  
   Do the data provide convincing evidence that approval changed? Test at α = 0.05.

**RU: Вычисление**
- Гипотезы: H0: p1=p2, Ha: p1 != p2.
- p1̂=530/1000=0.53, p2̂=480/900=0.5333.
- Объединённая оценка p̂=0.5316.
- SE = sqrt(p̂(1-p̂)(1/n1+1/n2)) = 0.02293.
- z = (p1̂-p2̂)/SE = -0.1454.
- Двустороннее p-value = 0.8844; не отвергаем H0.

**EN: Explanation** Set null and alternative hypotheses for proportion(s), compute the z statistic using the null-based standard error, then compare the p-value to alpha=0.05.

**Final answer**: p1=0.53, p2=0.5333, z=-0.1454, p-value=0.8844 => Fail to reject H0

#### Q3

**Prompt**: A psychologist wants to estimate the average number of hours teenagers spend on social media daily.  
Assuming σ = 1.5 hours, how many teenagers should be sampled to be 90% confident the estimate is  
within 0.4 hours of the true mean?

**RU: Вычисление**
- Используем формулу для известной σ: n=(z*σ/E)^2.
- Подставляем: n=(1.645*1.5/0.4)^2=38.0535.
- Округляем вверх: n=39.

**EN: Explanation** For a margin-of-error requirement with known sigma, use n=(z*sigma/E)^2 and round up.

**Final answer**: Required minimum sample size: n=39

#### Q4

**Prompt**: Monthly electricity bills in a city are approximately normally distributed with mean $120 and standard  
deviation $25. Suppose 200 random samples of size 50 are drawn.  
   (a) Find the mean and standard deviation of the sampling distribution of x̄.  
  
   (b) How many sample means fall between $115 and $125?  
  
(c) How many sample means fall below $113?

**RU: Вычисление**
- Параметры распределения выборочного среднего: μx̄=μ=120, σx̄=σ/√n=3.53553.
- Для интервала [115, 125]: z1=-1.4142, z2=1.4142.
- P(115<=x̄<=125)=0.8427 => ожидаемое число = 168.54 (~169).
- Для порога 113: z=-1.9799, вероятность=0.0239 => ожидаемое число=4.77 (~5).

**EN: Explanation** Use the sampling distribution of x-bar: mean mu and SD sigma/sqrt(n). Convert bounds to z-scores, compute normal probabilities, then multiply by the number of repeated samples.

**Final answer**: mu_xbar=120, sd_xbar=3.53553; between count≈168.54; below 113 count≈4.77

## Variant 5

### Part A — Multiple Choice

#### Q1

**Prompt**: Two independent groups of 20 students each are compared on math performance. The appropriate test is:  
  
A. Paired t-test  
B. Two-sample t-test of means  
C. One-sample z-test  
D. Chi-square test  
E. ANOVA

**RU: Вычисление**
- Определяем ключевую тему задания (например: inference).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** This compares means from two independent groups (athletes vs non-athletes), so use a two-sample procedure. Population standard deviations are not given and sample sizes are small, so a two-sample t-test is appropriate (not z, and not paired). That matches option B.

**Final answer**: B

#### Q2

**Prompt**: A histogram is roughly symmetric with mean 45 and standard deviation 7. The median is likely:  
  
A. Less than 45  
B. Greater than 45  
C. Approximately 45  
D. Equal to the standard deviation  
E. 0

**RU: Вычисление**
- Определяем ключевую тему задания (например: descriptive-stats).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** Most scores are around 70-80 with a tail toward lower values, so the distribution is left-skewed. In left skew, the mean is pulled downward below the median. Therefore the statement "median > mean" is the best choice, which is option C.

**Final answer**: C

#### Q3

**Prompt**: A researcher sends surveys to 500 randomly selected addresses from city records. This is:  
  
A. Cluster sampling  
B. Stratified sampling  
C. Simple random sampling  
D. Systematic sampling  
E. Convenience sampling

**RU: Вычисление**
- Определяем ключевую тему задания (например: sampling-methods).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** Selecting every 10th employee is the definition of systematic sampling: pick units at a fixed interval after an initial start. It is not simple random, cluster, or stratified sampling. Hence option C is correct.

**Final answer**: C

#### Q4

**Prompt**: For a t-distribution, as the sample size increases:  
  
A. The tails become heavier.  
B. The distribution becomes less normal.  
C. The critical value for a given α increases.  
D. The critical value approaches the z-value.  
E. The mean decreases.

**RU: Вычисление**
- Определяем ключевую тему задания (например: distributions).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: D.

**EN: Explanation** A standard normal distribution is continuous, symmetric, centered at 0, with standard deviation 1, and total area under the curve equal to 1. The only false statement is "area is 2," so the NOT-true option is D.

**Final answer**: D

#### Q5

**Prompt**: A bag has 4 black balls and 6 white balls. Two balls are drawn without replacement. P(both black) =  
  
A. 0.16  
B. 0.12  
C. 0.24  
D. 0.13  
E. 0.40

**RU: Вычисление**
- Определяем ключевую тему задания (например: probability-rules).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: D.

**EN: Explanation** Use conditional probability: P(Science | Math) = P(Science and Math) / P(Math). Substituting gives 0.42 / 0.70 = 0.60. The option expressing this setup is D.

**Final answer**: D

#### Q6

**Prompt**: Salaries are normally distributed with μ = $55,000 and σ = $8,000. P(salary > $71,000) =  
  
A. 0.0228  
B. 0.9772  
C. 0.0456  
D. 0.1587  
E. 0.0013

**RU: Вычисление**
- Определяем ключевую тему задания (например: normal-distribution).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: A.

**EN: Explanation** Standardize with z = (186 - 170) / 8 = 2. Then P(X > 186) = P(Z > 2) ≈ 0.0228 from the standard normal table. This corresponds to option A.

**Final answer**: A

#### Q7

**Prompt**: To estimate a mean within E with confidence level C, the minimum sample size formula is:  
  
A. n = (zσ/E)²  
B. n = zσ/E  
C. n = (zσ)²/E  
D. n = zσ²/E²  
E. n = (zE/σ)²

**RU: Вычисление**
- Определяем ключевую тему задания (например: confidence-interval).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: A.

**EN: Explanation** For a 95% margin requirement on a difference of two means with equal SDs, the margin form is z*sqrt(s1^2+s2^2)/sqrt(n). Set 1.96*sqrt(10^2+10^2)/sqrt(n) <= 3 and solve for n. That exact setup is option A.

**Final answer**: A

#### Q8

**Prompt**: r = 0.55 between income and spending. If all income values increase by $1,000, r becomes:  
  
A. 0.55  
B. Higher  
C. Lower  
D. 0  
E. −0.55

**RU: Вычисление**
- Определяем ключевую тему задания (например: correlation).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: A.

**EN: Explanation** Correlation near +1 means a strong positive linear association, while correlation near 0 means weak linear association. Correlation does not establish causation. The option consistent with these facts is A.

**Final answer**: A

#### Q9

**Prompt**: In a chi-square test for independence with a 2×3 table, the degrees of freedom are:  
  
A. 6  
B. 5  
C. 4  
D. 3  
E. 2

**RU: Вычисление**
- Определяем ключевую тему задания (например: chi-square).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: E.

**EN: Explanation** A chi-square test compares observed category counts to expected counts under a null model. The statistic sums (O-E)^2/E across categories and is right-tailed. The choice that describes this correctly is option E.

**Final answer**: E

#### Q10

**Prompt**: A stock either gains $500 (prob. 0.3), stays flat $0 (prob. 0.5), or loses $200 (prob. 0.2). Expected gain is:  
  
A. $110  
B. $150  
C. $50  
D. $100  
E. $300

**RU: Вычисление**
- Определяем ключевую тему задания (например: expected-value).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: A.

**EN: Explanation** Expected value is the probability-weighted average: E(X)=sum x*p(x). You multiply each outcome by its probability and add, rather than averaging outcomes equally. The correct statement is option A.

**Final answer**: A

#### Q11

**Prompt**: Subjects are matched by age and then randomly assigned within each pair to treatment A or B. This is:  
  
A. Completely randomized design  
B. Observational study  
C. Matched-pairs design  
D. Stratified sample  
E. Cluster design

**RU: Вычисление**
- Определяем ключевую тему задания (например: experimental-design).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** A well-designed experiment uses random assignment to treatment groups to balance confounders and support causal conclusions. Random sampling affects generalizability, not internal treatment comparison alone. The best answer is option C.

**Final answer**: C

#### Q12

**Prompt**: A residual plot shows a curved (U-shaped) pattern. This suggests:  
  
A. Linear model is appropriate.  
B. A non-linear model would be better.  
C. Variance is constant.  
D. There are no outliers.  
E. The sample is too small.

**RU: Вычисление**
- Определяем ключевую тему задания (например: regression).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** Residual = observed y - predicted y-hat. Positive residuals mean underprediction by the model, negative residuals mean overprediction. The option matching this interpretation is B.

**Final answer**: B

#### Q13

**Prompt**: A sample of 18 from a population with unknown distribution: mean = 30, SD = 6. Which is most likely about the sample?  
  
A. Normal by CLT  
B. Skewed right because minimum within 5 SD  
C. Skewed left because minimum within 5 SD  
D. Distribution mirrors the population exactly  
E. Uniform

**RU: Вычисление**
- Определяем ключевую тему задания (например: shape).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** By the central limit theorem, the sampling distribution of the sample mean becomes approximately normal for sufficiently large n (under standard conditions), even if the population is non-normal. The correct choice is option B.

**Final answer**: B

#### Q14

**Prompt**: In the one-proportion z-test, using p₀(1 - p₀)/n as the variance ensures:  
  
A. The denominator matches the alternative hypothesis.  
B. The standard error is computed under the assumption that H₀ is true.  
C. The sample proportion is maximized.  
D. The confidence interval is widest.  
E. The test is two-tailed.

**RU: Вычисление**
- Определяем ключевую тему задания (например: hypothesis-testing).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** In hypothesis testing, compare the p-value with alpha (or compare the test statistic with a critical threshold). Reject H0 only when evidence is strong enough under the null model. The option expressing this rule is B.

**Final answer**: B

#### Q15

**Prompt**: In a survey, only people who feel strongly about an issue respond. This introduces:  
  
A. Undercoverage  
B. Cluster bias  
C. Voluntary response bias  
D. Response bias  
E. Observer bias

**RU: Вычисление**
- Определяем ключевую тему задания (например: bias).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** Bias is a systematic deviation caused by design or measurement issues, not random sampling fluctuation. Increasing sample size reduces random error but does not fix biased collection. Therefore option C is correct.

**Final answer**: C

#### Q16

**Prompt**: Two relays in series each work with probability 0.9 independently. System works if both work. P(system works) =  
  
A. 0.81  
B. 0.90  
C. 0.19  
D. 0.99  
E. 0.50

**RU: Вычисление**
- Определяем ключевую тему задания (например: independence).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: A.

**EN: Explanation** Independence means P(A and B)=P(A)P(B), equivalently P(A|B)=P(A) when P(B)>0. If this product rule fails, events are dependent. The option stating this criterion is A.

**Final answer**: A

#### Q17

**Prompt**: A 95% CI for μ is (18.5, 25.5). Which is true?  
  
A. P(μ is in this interval) = 0.95.  
B. 95% of population values are in this range.  
C. The sample mean is 22.  
D. μ must equal 22.  
E. The CI was computed incorrectly.

**RU: Вычисление**
- Определяем ключевую тему задания (например: confidence-interval).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** A confidence interval gives a plausible range for the population parameter based on sample data and method reliability. In repeated sampling, a 95% method captures the true parameter about 95% of the time. The correct interpretation here is option C.

**Final answer**: C

#### Q18

**Prompt**: For a large sample test of H₀: μ = 50, the z-test statistic is:  
  
A. z = (x̄ - μ₀) / (s/√n)  
B. z = (x̄ - μ₀) / s  
C. z = x̄ / (σ/√n)  
D. z = (x̄ - μ₀) × √n / σ  
E. z = n(x̄ - μ₀) / s

**RU: Вычисление**
- Определяем ключевую тему задания (например: conditions).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: D.

**EN: Explanation** Before inference, check conditions such as randomness/independence and distribution or large-sample requirements for the chosen method. If assumptions fail badly, usual formulas may be invalid. The best option is D.

**Final answer**: D

#### Q19

**Prompt**: A game tickets cost $5. 1,500 tickets are sold and one prize of $2,000 is awarded. The expected net gain per ticket is approximately:  
  
A. −$3.67  
B. −$3.00  
C. $1.33  
D. −$1.33  
E. $3.67

**RU: Вычисление**
- Определяем ключевую тему задания (например: expected-value).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: A.

**EN: Explanation** For repeated independent trials, expected total equals number of trials times expected single-trial outcome: E(total)=n*E(X). This linearity rule is fundamental and does not require normality. The option reflecting this is A.

**Final answer**: A

#### Q20

**Prompt**: H_a: μ < 100. Power increases as:  
  
A. True μ approaches 100 from below.  
B. True μ moves far below 100.  
C. n decreases.  
D. σ increases.  
E. α decreases.

**RU: Вычисление**
- Определяем ключевую тему задания (например: power).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** Statistical power is P(reject H0 | H1 true): the chance a test detects a real effect. Power increases with larger effects, larger n, lower variability, and a more permissive alpha. The option defining this correctly is B.

**Final answer**: B

### Part B — Free Response

#### Q1

**Prompt**: A fundraising event uses a ring-toss game. Players pay $5 per attempt. A win (probability 0.15) pays  
$15; a near-miss (probability 0.30) pays $2; a miss (probability 0.55) pays $0.  
   (a) Let X be the net gain to the charity. Complete the probability distribution of X.  
  
   (b) What is E(X)?  
  
   (c) What is the fewest number of attempts for the expected total net gain to be at least $500?  
  
   (d) In 1,000 attempts, the mean net gain is $2,650 and the standard deviation is $500. Use the  
   normal distribution to approximate the probability of total net gain of at least $2,500.

**RU: Вычисление**
- Определим чистый результат за игру: выигрыш организатора = стоимость - выплата.
- Исход 1: X=-10, P=0.15.
- Исход 2: X=3, P=0.3.
- Исход 3: X=5, P=0.55.
- Матожидание: E(X)=Σ x·p = 2.15.
- Для ожидаемого суммарного результата не менее 500: n·E(X) >= 500, значит n >= 232.5581 -> минимально n=233.
- Для части (d): z = (2500-2650)/500 = -0.3.
- P(T >= 2500) = P(Z >= -0.3) = 0.6179.

**EN: Explanation** Build the net-gain distribution first, then compute E(X). Use n*E(X) for the minimum plays threshold. In part (d), standardize the total gain with z=(T-mu)/sigma and read the upper-tail normal probability.

**Final answer**: Distribution: -10 (p=0.15), 3 (p=0.3), 5 (p=0.55); E(X)=2.15; min plays=233; P(total >= 2500)≈0.6179

#### Q2

**Prompt**: A poll in March 2024 found that 620 of 1,100 randomly sampled people supported a local ordinance. A  
similar poll in March 2023 found 560 of 1,000 people supported it.  
   Is there convincing evidence that support has changed? Test at α = 0.05.

**RU: Вычисление**
- Гипотезы: H0: p1=p2, Ha: p1 != p2.
- p1̂=620/1100=0.5636, p2̂=560/1000=0.56.
- Объединённая оценка p̂=0.5619.
- SE = sqrt(p̂(1-p̂)(1/n1+1/n2)) = 0.02168.
- z = (p1̂-p2̂)/SE = 0.1677.
- Двустороннее p-value = 0.8668; не отвергаем H0.

**EN: Explanation** Set null and alternative hypotheses for proportion(s), compute the z statistic using the null-based standard error, then compare the p-value to alpha=0.05.

**Final answer**: p1=0.5636, p2=0.56, z=0.1677, p-value=0.8668 => Fail to reject H0

#### Q3

**Prompt**: An engineer wants to estimate the average tensile strength of a cable. From prior testing, σ = 15 MPa.  
How many tests are needed to be 99% confident the estimate is within 4 MPa of the true mean?

**RU: Вычисление**
- Используем формулу для известной σ: n=(z*σ/E)^2.
- Подставляем: n=(2.576*15/4)^2=93.3156.
- Округляем вверх: n=94.

**EN: Explanation** For a margin-of-error requirement with known sigma, use n=(z*sigma/E)^2 and round up.

**Final answer**: Required minimum sample size: n=94

#### Q4

**Prompt**: Daily water usage (liters) by households in a city is approximately normally distributed with mean 350  
and standard deviation 60. Suppose 250 random samples of size 36 are drawn.  
   (a) Find the mean and standard deviation of the sampling distribution of x̄.  
  
   (b) How many sample means fall between 340 and 360?  
  
(c) How many sample means fall above 365?

**RU: Вычисление**
- Параметры распределения выборочного среднего: μx̄=μ=350, σx̄=σ/√n=10.
- Для интервала [340, 360]: z1=-1, z2=1.
- P(340<=x̄<=360)=0.6827 => ожидаемое число = 170.67 (~171).
- Для порога 365: z=1.5, вероятность=0.0668 => ожидаемое число=16.7 (~17).

**EN: Explanation** Use the sampling distribution of x-bar: mean mu and SD sigma/sqrt(n). Convert bounds to z-scores, compute normal probabilities, then multiply by the number of repeated samples.

**Final answer**: mu_xbar=350, sd_xbar=10; between count≈170.67; above 365 count≈16.7

## Variant 6

### Part A — Multiple Choice

#### Q1

**Prompt**: A coach compares sprint times of athletes before and after a training program (same athletes). The best test is:  
  
A. Two-sample z-test  
B. Two-sample t-test  
C. Paired t-test  
D. Chi-square test  
E. F-test

**RU: Вычисление**
- Определяем ключевую тему задания (например: inference).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** This compares means from two independent groups (athletes vs non-athletes), so use a two-sample procedure. Population standard deviations are not given and sample sizes are small, so a two-sample t-test is appropriate (not z, and not paired). That matches option C.

**Final answer**: C

#### Q2

**Prompt**: A distribution has a long right tail. Which is most likely true?  
  
A. Mean = Median  
B. Mean > Median  
C. Mean < Median  
D. Median = Mode  
E. IQR = 0

**RU: Вычисление**
- Определяем ключевую тему задания (например: descriptive-stats).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** Most scores are around 70-80 with a tail toward lower values, so the distribution is left-skewed. In left skew, the mean is pulled downward below the median. Therefore the statement "median > mean" is the best choice, which is option B.

**Final answer**: B

#### Q3

**Prompt**: Researchers interview one randomly chosen member from each of 40 randomly chosen households in a city. This is:  
  
A. Stratified sampling  
B. Simple random sampling  
C. Cluster sampling  
D. Systematic sampling  
E. Convenience sampling

**RU: Вычисление**
- Определяем ключевую тему задания (например: sampling-methods).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** Selecting every 10th employee is the definition of systematic sampling: pick units at a fixed interval after an initial start. It is not simple random, cluster, or stratified sampling. Hence option C is correct.

**Final answer**: C

#### Q4

**Prompt**: A t-distribution with df = 2 compared to df = 20 is:  
  
A. More concentrated around 0  
B. Less spread out  
C. More spread out / heavier-tailed  
D. Identical  
E. Negatively skewed

**RU: Вычисление**
- Определяем ключевую тему задания (например: distributions).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** A standard normal distribution is continuous, symmetric, centered at 0, with standard deviation 1, and total area under the curve equal to 1. The only false statement is "area is 2," so the NOT-true option is C.

**Final answer**: C

#### Q5

**Prompt**: P(A) = 0.6, P(B) = 0.5, A and B are independent. P(A and B) =  
  
A. 0.30  
B. 0.55  
C. 0.10  
D. 0.80  
E. 1.10

**RU: Вычисление**
- Определяем ключевую тему задания (например: probability-rules).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: A.

**EN: Explanation** Use conditional probability: P(Science | Math) = P(Science and Math) / P(Math). Substituting gives 0.42 / 0.70 = 0.60. The option expressing this setup is A.

**Final answer**: A

#### Q6

**Prompt**: Exam scores are N(75, 12). What percent score above 99?  
  
A. 0.0228  
B. 0.0456  
C. 0.9772  
D. 0.1587  
E. 0.0013

**RU: Вычисление**
- Определяем ключевую тему задания (например: normal-distribution).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: A.

**EN: Explanation** Standardize with z = (186 - 170) / 8 = 2. Then P(X > 186) = P(Z > 2) ≈ 0.0228 from the standard normal table. This corresponds to option A.

**Final answer**: A

#### Q7

**Prompt**: A 99% CI for a mean requires knowing:  
  
A. Only the standard deviation  
B. Only the sample size  
C. Both sample size and standard deviation  
D. The population mean  
E. The population distribution

**RU: Вычисление**
- Определяем ключевую тему задания (например: confidence-interval).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** For a 95% margin requirement on a difference of two means with equal SDs, the margin form is z*sqrt(s1^2+s2^2)/sqrt(n). Set 1.96*sqrt(10^2+10^2)/sqrt(n) <= 3 and solve for n. That exact setup is option C.

**Final answer**: C

#### Q8

**Prompt**: Correlation between age and income is 0.45. If income is expressed in thousands instead of dollars, r becomes:  
  
A. 0.045  
B. 45  
C. 0.45  
D. −0.45  
E. 0.90

**RU: Вычисление**
- Определяем ключевую тему задания (например: correlation).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** Correlation near +1 means a strong positive linear association, while correlation near 0 means weak linear association. Correlation does not establish causation. The option consistent with these facts is C.

**Final answer**: C

#### Q9

**Prompt**: A chi-square goodness-of-fit test with 6 categories has df =  
  
A. 6  
B. 5  
C. 4  
D. 7  
E. 12

**RU: Вычисление**
- Определяем ключевую тему задания (например: chi-square).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** A chi-square test compares observed category counts to expected counts under a null model. The statistic sums (O-E)^2/E across categories and is right-tailed. The choice that describes this correctly is option B.

**Final answer**: B

#### Q10

**Prompt**: A fair coin is flipped 10 times. Expected number of heads is:  
  
A. 10  
B. 4  
C. 6  
D. 5  
E. 2

**RU: Вычисление**
- Определяем ключевую тему задания (например: expected-value).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: D.

**EN: Explanation** Expected value is the probability-weighted average: E(X)=sum x*p(x). You multiply each outcome by its probability and add, rather than averaging outcomes equally. The correct statement is option D.

**Final answer**: D

#### Q11

**Prompt**: Volunteers are randomly assigned to watch comedy or drama films and their mood is rated afterward. This is:  
  
A. Observational study  
B. Randomized experiment  
C. Survey  
D. Case study  
E. Matched-pairs study

**RU: Вычисление**
- Определяем ключевую тему задания (например: experimental-design).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** A well-designed experiment uses random assignment to treatment groups to balance confounders and support causal conclusions. Random sampling affects generalizability, not internal treatment comparison alone. The best answer is option B.

**Final answer**: B

#### Q12

**Prompt**: In regression, the least-squares line minimizes:  
  
A. Sum of residuals  
B. Sum of squared residuals  
C. Sum of absolute residuals  
D. Total variation in y  
E. Total variation in x

**RU: Вычисление**
- Определяем ключевую тему задания (например: regression).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** Residual = observed y - predicted y-hat. Positive residuals mean underprediction by the model, negative residuals mean overprediction. The option matching this interpretation is B.

**Final answer**: B

#### Q13

**Prompt**: A sample of 35 has mean 200 and SD 40. This distribution is most likely:  
  
A. Normal by CLT (sampling distribution)  
B. Skewed right because minimum within 5 SD  
C. Skewed left  
D. Exactly normal  
E. Uniform

**RU: Вычисление**
- Определяем ключевую тему задания (например: shape).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: A.

**EN: Explanation** By the central limit theorem, the sampling distribution of the sample mean becomes approximately normal for sufficiently large n (under standard conditions), even if the population is non-normal. The correct choice is option A.

**Final answer**: A

#### Q14

**Prompt**: In a two-proportion z-test, a pooled proportion is used because:  
  
A. It is more accurate than each p̂.  
B. Under H₀ the proportions are assumed equal, so we pool.  
C. The sample sizes differ.  
D. It makes the test two-tailed.  
E. It increases power.

**RU: Вычисление**
- Определяем ключевую тему задания (например: hypothesis-testing).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** In hypothesis testing, compare the p-value with alpha (or compare the test statistic with a critical threshold). Reject H0 only when evidence is strong enough under the null model. The option expressing this rule is B.

**Final answer**: B

#### Q15

**Prompt**: A survey interviewer records a 'yes' for anyone who hesitates. This is:  
  
A. Voluntary response bias  
B. Non-response bias  
C. Measurement/response bias  
D. Undercoverage  
E. Cluster bias

**RU: Вычисление**
- Определяем ключевую тему задания (например: bias).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** Bias is a systematic deviation caused by design or measurement issues, not random sampling fluctuation. Increasing sample size reduces random error but does not fix biased collection. Therefore option C is correct.

**Final answer**: C

#### Q16

**Prompt**: P(pass exam) = 0.80, P(pass and studied) = 0.72. P(studied | passed) =  
  
A. 0.80  
B. 0.72  
C. 0.90  
D. 0.576  
E. 0.08

**RU: Вычисление**
- Определяем ключевую тему задания (например: independence).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** Independence means P(A and B)=P(A)P(B), equivalently P(A|B)=P(A) when P(B)>0. If this product rule fails, events are dependent. The option stating this criterion is C.

**Final answer**: C

#### Q17

**Prompt**: A 95% CI for p is (0.41, 0.59). The sample proportion is:  
  
A. 0.41  
B. 0.59  
C. 0.50  
D. 0.18  
E. 0.09

**RU: Вычисление**
- Определяем ключевую тему задания (например: confidence-interval).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** A confidence interval gives a plausible range for the population parameter based on sample data and method reliability. In repeated sampling, a 95% method captures the true parameter about 95% of the time. The correct interpretation here is option C.

**Final answer**: C

#### Q18

**Prompt**: The margin of error of a confidence interval decreases when:  
  
A. Confidence level increases  
B. Sample size decreases  
C. Standard deviation increases  
D. Sample size increases  
E. α decreases

**RU: Вычисление**
- Определяем ключевую тему задания (например: conditions).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: A.

**EN: Explanation** Before inference, check conditions such as randomness/independence and distribution or large-sample requirements for the chosen method. If assumptions fail badly, usual formulas may be invalid. The best option is A.

**Final answer**: A

#### Q19

**Prompt**: 1,200 raffle tickets at $4 each. One prize of $3,000. Expected net gain per ticket is:  
  
A. −$1.50  
B. −$2.50  
C. $1.50  
D. $2.50  
E. −$3.00

**RU: Вычисление**
- Определяем ключевую тему задания (например: expected-value).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** For repeated independent trials, expected total equals number of trials times expected single-trial outcome: E(total)=n*E(X). This linearity rule is fundamental and does not require normality. The option reflecting this is B.

**Final answer**: B

#### Q20

**Prompt**: H_a: μ ≠ 70 with α = 0.05. Power is increased by:  
  
A. Decreasing n  
B. Moving true μ closer to 70  
C. Increasing σ  
D. Increasing n  
E. Decreasing α

**RU: Вычисление**
- Определяем ключевую тему задания (например: power).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** Statistical power is P(reject H0 | H1 true): the chance a test detects a real effect. Power increases with larger effects, larger n, lower variability, and a more permissive alpha. The option defining this correctly is B.

**Final answer**: B

### Part B — Free Response

#### Q1

**Prompt**: A charity auction uses a sealed-bid game. Participants pay $6 to enter. Prizes: $50 (prob. 0.05), $10  
(prob. 0.20), $0 (prob. 0.75).  
   (a) Let X be net gain to the charity. Complete the probability distribution of X.  
  
   (b) Find E(X).  
  
   (c) Find the minimum number of entries for expected total net gain ≥ $200.  
  
   (d) In 700 entries, mean total net gain = $700, SD = $350. Use the normal approximation to find  
   P(total gain > $800).

**RU: Вычисление**
- Определим чистый результат за игру: выигрыш организатора = стоимость - выплата.
- Исход 1: X=-44, P=0.05.
- Исход 2: X=-4, P=0.2.
- Исход 3: X=6, P=0.75.
- Матожидание: E(X)=Σ x·p = 1.5.
- Для ожидаемого суммарного результата не менее 200: n·E(X) >= 200, значит n >= 133.3333 -> минимально n=134.
- Для части (d): z = (800-700)/350 = 0.2857.
- P(T >= 800) = P(Z >= 0.2857) = 0.3875.

**EN: Explanation** Build the net-gain distribution first, then compute E(X). Use n*E(X) for the minimum plays threshold. In part (d), standardize the total gain with z=(T-mu)/sigma and read the upper-tail normal probability.

**Final answer**: Distribution: -44 (p=0.05), -4 (p=0.2), 6 (p=0.75); E(X)=1.5; min plays=134; P(total >= 800)≈0.3875

#### Q2

**Prompt**: A 2024 survey showed 450 of 750 adults support renewable energy legislation. A 2022 survey showed  
380 of 700.  
   Test whether support increased significantly from 2022 to 2024. Use α = 0.05.

**RU: Вычисление**
- Гипотезы: H0: p1=p2, Ha: p1 > p2.
- p1̂=450/750=0.6, p2̂=380/700=0.5429.
- Объединённая оценка p̂=0.5724.
- SE = sqrt(p̂(1-p̂)(1/n1+1/n2)) = 0.026.
- z = (p1̂-p2̂)/SE = 2.1978.
- Правостороннее p-value = 0.014; отвергаем H0.

**EN: Explanation** Set null and alternative hypotheses for proportion(s), compute the z statistic using the null-based standard error, then compare the p-value to alpha=0.05.

**Final answer**: p1=0.6, p2=0.5429, z=2.1978, p-value=0.014 => Reject H0

#### Q3

**Prompt**: A meteorologist wants to estimate mean annual rainfall with σ = 28 mm. How many years of data are  
needed for a 95% CI within 8 mm?

**RU: Вычисление**
- Используем формулу для известной σ: n=(z*σ/E)^2.
- Подставляем: n=(1.96*28/8)^2=47.0596.
- Округляем вверх: n=48.

**EN: Explanation** For a margin-of-error requirement with known sigma, use n=(z*sigma/E)^2 and round up.

**Final answer**: Required minimum sample size: n=48

#### Q4

**Prompt**: A factory's bolts have diameters approximately N(10 mm, 0.3 mm). 120 random samples of size 40 are  
taken.  
   (a) Find the mean and SD of the sampling distribution of x̄.  
  
   (b) How many sample means fall between 9.9 and 10.1 mm?  
  
(c) How many fall below 9.85 mm?

**RU: Вычисление**
- Параметры распределения выборочного среднего: μx̄=μ=10, σx̄=σ/√n=0.04743.
- Для интервала [9.9, 10.1]: z1=-2.1082, z2=2.1082.
- P(9.9<=x̄<=10.1)=0.965 => ожидаемое число = 115.8 (~116).
- Для порога 9.85: z=-3.1623, вероятность=0.0008 => ожидаемое число=0.09 (~0).

**EN: Explanation** Use the sampling distribution of x-bar: mean mu and SD sigma/sqrt(n). Convert bounds to z-scores, compute normal probabilities, then multiply by the number of repeated samples.

**Final answer**: mu_xbar=10, sd_xbar=0.04743; between count≈115.8; below 9.85 count≈0.09

## Variant 7

### Part A — Multiple Choice

#### Q1

**Prompt**: To compare mean gas mileage of sedans vs. SUVs (25 of each), the appropriate test is:  
  
A. Paired t-test  
B. Two-sample t-test  
C. One-sample t-test  
D. Chi-square  
E. Z-test for proportions

**RU: Вычисление**
- Определяем ключевую тему задания (например: inference).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** This compares means from two independent groups (athletes vs non-athletes), so use a two-sample procedure. Population standard deviations are not given and sample sizes are small, so a two-sample t-test is appropriate (not z, and not paired). That matches option B.

**Final answer**: B

#### Q2

**Prompt**: A distribution has mean 30 and median 35. It is most likely:  
  
A. Symmetric  
B. Skewed right  
C. Skewed left  
D. Bimodal  
E. Uniform

**RU: Вычисление**
- Определяем ключевую тему задания (например: descriptive-stats).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** Most scores are around 70-80 with a tail toward lower values, so the distribution is left-skewed. In left skew, the mean is pulled downward below the median. Therefore the statement "median > mean" is the best choice, which is option C.

**Final answer**: C

#### Q3

**Prompt**: A researcher selects every 20th name on a voter registration list. This is:  
  
A. Simple random sampling  
B. Stratified  
C. Cluster  
D. Systematic  
E. Convenience

**RU: Вычисление**
- Определяем ключевую тему задания (например: sampling-methods).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: D.

**EN: Explanation** Selecting every 10th employee is the definition of systematic sampling: pick units at a fixed interval after an initial start. It is not simple random, cluster, or stratified sampling. Hence option D is correct.

**Final answer**: D

#### Q4

**Prompt**: Which is true about all normal distributions?  
  
A. μ = 0  
B. σ = 1  
C. They are symmetric and bell-shaped.  
D. The area under the curve is 2.  
E. Mean > Median always.

**RU: Вычисление**
- Определяем ключевую тему задания (например: distributions).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** A standard normal distribution is continuous, symmetric, centered at 0, with standard deviation 1, and total area under the curve equal to 1. The only false statement is "area is 2," so the NOT-true option is C.

**Final answer**: C

#### Q5

**Prompt**: P(A) = 0.3 and P(B) = 0.6 with A and B mutually exclusive. P(A or B) =  
  
A. 0.18  
B. 0.72  
C. 0.90  
D. 0.42  
E. 0.30

**RU: Вычисление**
- Определяем ключевую тему задания (например: probability-rules).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** Use conditional probability: P(Science | Math) = P(Science and Math) / P(Math). Substituting gives 0.42 / 0.70 = 0.60. The option expressing this setup is C.

**Final answer**: C

#### Q6

**Prompt**: A normal distribution has μ = 60 and σ = 5. P(X < 52.5) =  
  
A. 0.0668  
B. 0.9332  
C. 0.0228  
D. 0.1587  
E. 0.3085

**RU: Вычисление**
- Определяем ключевую тему задания (например: normal-distribution).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: A.

**EN: Explanation** Standardize with z = (186 - 170) / 8 = 2. Then P(X > 186) = P(Z > 2) ≈ 0.0228 from the standard normal table. This corresponds to option A.

**Final answer**: A

#### Q7

**Prompt**: The width of a confidence interval can be reduced by:  
  
A. Increasing confidence level  
B. Decreasing n  
C. Increasing σ  
D. Decreasing n  
E. Increasing n

**RU: Вычисление**
- Определяем ключевую тему задания (например: confidence-interval).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: E.

**EN: Explanation** For a 95% margin requirement on a difference of two means with equal SDs, the margin form is z*sqrt(s1^2+s2^2)/sqrt(n). Set 1.96*sqrt(10^2+10^2)/sqrt(n) <= 3 and solve for n. That exact setup is option E.

**Final answer**: E

#### Q8

**Prompt**: r = 0.70 between height (inches) and weight (lbs). If heights are converted to cm, r:  
  
A. Increases  
B. Decreases  
C. Becomes 0  
D. Stays 0.70  
E. Changes sign

**RU: Вычисление**
- Определяем ключевую тему задания (например: correlation).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: D.

**EN: Explanation** Correlation near +1 means a strong positive linear association, while correlation near 0 means weak linear association. Correlation does not establish causation. The option consistent with these facts is D.

**Final answer**: D

#### Q9

**Prompt**: A 2×2 contingency table is tested for independence. df =  
  
A. 4  
B. 3  
C. 2  
D. 1  
E. 0

**RU: Вычисление**
- Определяем ключевую тему задания (например: chi-square).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: D.

**EN: Explanation** A chi-square test compares observed category counts to expected counts under a null model. The statistic sums (O-E)^2/E across categories and is right-tailed. The choice that describes this correctly is option D.

**Final answer**: D

#### Q10

**Prompt**: Rolling a fair die. Expected value of the outcome is:  
  
A. 1  
B. 3  
C. 3.5  
D. 4  
E. 6

**RU: Вычисление**
- Определяем ключевую тему задания (например: expected-value).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** Expected value is the probability-weighted average: E(X)=sum x*p(x). You multiply each outcome by its probability and add, rather than averaging outcomes equally. The correct statement is option C.

**Final answer**: C

#### Q11

**Prompt**: Subjects in two groups receive different medications; assignment is by random coin flip. This is:  
  
A. Observational study  
B. Matched-pairs design  
C. Completely randomized design  
D. Block design  
E. Case-control study

**RU: Вычисление**
- Определяем ключевую тему задания (например: experimental-design).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** A well-designed experiment uses random assignment to treatment groups to balance confounders and support causal conclusions. Random sampling affects generalizability, not internal treatment comparison alone. The best answer is option C.

**Final answer**: C

#### Q12

**Prompt**: The coefficient of determination R² represents:  
  
A. Correlation between x and y  
B. Fraction of variation in y explained by x  
C. Slope of regression line  
D. Standard error of regression  
E. Residual sum of squares

**RU: Вычисление**
- Определяем ключевую тему задания (например: regression).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** Residual = observed y - predicted y-hat. Positive residuals mean underprediction by the model, negative residuals mean overprediction. The option matching this interpretation is B.

**Final answer**: B

#### Q13

**Prompt**: A sample of 50 from a right-skewed population: the sampling distribution of x̄ is:  
  
A. Right-skewed by CLT  
B. Left-skewed  
C. Approximately normal by CLT  
D. Uniform  
E. Unknown

**RU: Вычисление**
- Определяем ключевую тему задания (например: shape).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** By the central limit theorem, the sampling distribution of the sample mean becomes approximately normal for sufficiently large n (under standard conditions), even if the population is non-normal. The correct choice is option C.

**Final answer**: C

#### Q14

**Prompt**: In a hypothesis test, a Type I error occurs when:  
  
A. H₀ is true and is rejected.  
B. H₀ is false and is rejected.  
C. H₀ is true and is not rejected.  
D. H₀ is false and is not rejected.  
E. The p-value exceeds α.

**RU: Вычисление**
- Определяем ключевую тему задания (например: hypothesis-testing).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: A.

**EN: Explanation** In hypothesis testing, compare the p-value with alpha (or compare the test statistic with a critical threshold). Reject H0 only when evidence is strong enough under the null model. The option expressing this rule is A.

**Final answer**: A

#### Q15

**Prompt**: Asking about income in a face-to-face survey tends to cause:  
  
A. Undercoverage  
B. Voluntary response bias  
C. Social desirability bias  
D. Cluster bias  
E. Non-response bias

**RU: Вычисление**
- Определяем ключевую тему задания (например: bias).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** Bias is a systematic deviation caused by design or measurement issues, not random sampling fluctuation. Increasing sample size reduces random error but does not fix biased collection. Therefore option C is correct.

**Final answer**: C

#### Q16

**Prompt**: P(at least one six in two rolls of a fair die) =  
  
A. 1/6  
B. 2/6  
C. 11/36  
D. 1/36  
E. 25/36

**RU: Вычисление**
- Определяем ключевую тему задания (например: independence).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** Independence means P(A and B)=P(A)P(B), equivalently P(A|B)=P(A) when P(B)>0. If this product rule fails, events are dependent. The option stating this criterion is C.

**Final answer**: C

#### Q17

**Prompt**: A 95% CI for μ is (34, 46). The margin of error is:  
  
A. 34  
B. 46  
C. 40  
D. 6  
E. 12

**RU: Вычисление**
- Определяем ключевую тему задания (например: confidence-interval).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: D.

**EN: Explanation** A confidence interval gives a plausible range for the population parameter based on sample data and method reliability. In repeated sampling, a 95% method captures the true parameter about 95% of the time. The correct interpretation here is option D.

**Final answer**: D

#### Q18

**Prompt**: In a two-sample t-test, assuming equal variances is required when:  
  
A. Using the pooled two-sample t-test  
B. Using the Welch t-test  
C. n₁ = n₂  
D. Both samples are large  
E. σ is known

**RU: Вычисление**
- Определяем ключевую тему задания (например: conditions).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: A.

**EN: Explanation** Before inference, check conditions such as randomness/independence and distribution or large-sample requirements for the chosen method. If assumptions fail badly, usual formulas may be invalid. The best option is A.

**Final answer**: A

#### Q19

**Prompt**: A game sells 800 tickets at $2. Two prizes of $200 each. Expected net gain per ticket:  
  
A. −$1.00  
B. −$1.50  
C. $0.50  
D. $1.00  
E. −$0.50

**RU: Вычисление**
- Определяем ключевую тему задания (например: expected-value).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** For repeated independent trials, expected total equals number of trials times expected single-trial outcome: E(total)=n*E(X). This linearity rule is fundamental and does not require normality. The option reflecting this is B.

**Final answer**: B

#### Q20

**Prompt**: Power of a hypothesis test can be increased by:  
  
A. Using a smaller α  
B. Increasing sample size  
C. Decreasing sample size  
D. Moving H_a closer to H₀  
E. Increasing σ

**RU: Вычисление**
- Определяем ключевую тему задания (например: power).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** Statistical power is P(reject H0 | H1 true): the chance a test detects a real effect. Power increases with larger effects, larger n, lower variability, and a more permissive alpha. The option defining this correctly is B.

**Final answer**: B

### Part B — Free Response

#### Q1

**Prompt**: A jar contains 3 gold coins, 5 silver coins, and 2 bronze coins. A player pays $4 and draws one coin:  
gold wins $10, silver wins $2, bronze wins $0.  
   (a) Let X be net gain to the charity. Complete the probability distribution.  
  
   (b) Find E(X).  
  
   (c) Fewest number of plays for expected total net gain ≥ $100?  
  
   (d) In 300 plays, mean = $90, SD = $150. P(total gain ≥ $60) using normal approximation.

**RU: Вычисление**
- Определим чистый результат за игру: выигрыш организатора = стоимость - выплата.
- Исход 1: X=-6, P=0.3.
- Исход 2: X=2, P=0.5.
- Исход 3: X=4, P=0.2.
- Матожидание: E(X)=Σ x·p = 0.
- Для ожидаемого суммарного результата не менее 100: n·E(X) >= 100, значит n >= 450359962737049600 -> минимально n=450359962737049600.
- Для части (d): z = (60-90)/150 = -0.2.
- P(T >= 60) = P(Z >= -0.2) = 0.5793.

**EN: Explanation** Build the net-gain distribution first, then compute E(X). Use n*E(X) for the minimum plays threshold. In part (d), standardize the total gain with z=(T-mu)/sigma and read the upper-tail normal probability.

**Final answer**: Distribution: -6 (p=0.3), 2 (p=0.5), 4 (p=0.2); E(X)=0; min plays=450359962737049600; P(total >= 60)≈0.5793

#### Q2

**Prompt**: A study in City A found 280 of 400 adults own a car. In City B, 330 of 500 own a car.  
   Is there a significant difference in car ownership? Test at α = 0.05.

**RU: Вычисление**
- Гипотезы: H0: p1=p2, Ha: p1 != p2.
- p1̂=280/400=0.7, p2̂=330/500=0.66.
- Объединённая оценка p̂=0.6778.
- SE = sqrt(p̂(1-p̂)(1/n1+1/n2)) = 0.03135.
- z = (p1̂-p2̂)/SE = 1.2759.
- Двустороннее p-value = 0.202; не отвергаем H0.

**EN: Explanation** Set null and alternative hypotheses for proportion(s), compute the z statistic using the null-based standard error, then compare the p-value to alpha=0.05.

**Final answer**: p1=0.7, p2=0.66, z=1.2759, p-value=0.202 => Fail to reject H0

#### Q3

**Prompt**: A psychologist wants to estimate the mean number of hours people sleep with σ = 1.2 hours. How  
many subjects are needed for a 95% CI within 0.3 hours?

**RU: Вычисление**
- Используем формулу для известной σ: n=(z*σ/E)^2.
- Подставляем: n=(1.96*1.2/0.3)^2=61.4656.
- Округляем вверх: n=62.

**EN: Explanation** For a margin-of-error requirement with known sigma, use n=(z*sigma/E)^2 and round up.

**Final answer**: Required minimum sample size: n=62

#### Q4

**Prompt**: Coffee temperatures at a café are N(68°C, 4°C). 180 samples of size 25 are taken.  
   (a) Find the mean and SD of the sampling distribution of x̄.  
  
   (b) How many sample means fall between 67 and 69°C?  
  
   (c) How many fall above 69.5°C?

**RU: Вычисление**
- Параметры распределения выборочного среднего: μx̄=μ=68, σx̄=σ/√n=0.8.
- Для интервала [67, 69]: z1=-1.25, z2=1.25.
- P(67<=x̄<=69)=0.7887 => ожидаемое число = 141.97 (~142).
- Для порога 69.5: z=1.875, вероятность=0.0304 => ожидаемое число=5.47 (~5).

**EN: Explanation** Use the sampling distribution of x-bar: mean mu and SD sigma/sqrt(n). Convert bounds to z-scores, compute normal probabilities, then multiply by the number of repeated samples.

**Final answer**: mu_xbar=68, sd_xbar=0.8; between count≈141.97; above 69.5 count≈5.47

## Variant 8

### Part A — Multiple Choice

#### Q1

**Prompt**: A hospital compares recovery times of patients with two different surgeons, each treating 18 patients. The appropriate test is:  
  
A. Paired t-test  
B. Two-sample t-test  
C. One-sample t-test  
D. Two-proportion z-test  
E. Chi-square

**RU: Вычисление**
- Определяем ключевую тему задания (например: inference).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** This compares means from two independent groups (athletes vs non-athletes), so use a two-sample procedure. Population standard deviations are not given and sample sizes are small, so a two-sample t-test is appropriate (not z, and not paired). That matches option B.

**Final answer**: B

#### Q2

**Prompt**: A dataset has mean 200 and median 180. The distribution is:  
  
A. Symmetric  
B. Skewed left  
C. Skewed right  
D. Bimodal  
E. Uniform

**RU: Вычисление**
- Определяем ключевую тему задания (например: descriptive-stats).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** Most scores are around 70-80 with a tail toward lower values, so the distribution is left-skewed. In left skew, the mean is pulled downward below the median. Therefore the statement "median > mean" is the best choice, which is option C.

**Final answer**: C

#### Q3

**Prompt**: To estimate voter preferences, a city is divided into 10 districts and 2 districts are randomly chosen; all voters in those districts are surveyed. This is:  
  
A. Simple random sampling  
B. Stratified sampling  
C. Cluster sampling  
D. Systematic sampling  
E. Convenience sampling

**RU: Вычисление**
- Определяем ключевую тему задания (например: sampling-methods).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** Selecting every 10th employee is the definition of systematic sampling: pick units at a fixed interval after an initial start. It is not simple random, cluster, or stratified sampling. Hence option C is correct.

**Final answer**: C

#### Q4

**Prompt**: A z-score of 1.96 is used for a 95% confidence interval because:  
  
A. 5% of the normal distribution lies beyond ±1.96.  
B. 95% of the normal distribution lies within ±1.96.  
C. Both A and B.  
D. The t-distribution requires it.  
E. The sample size is 1.96.

**RU: Вычисление**
- Определяем ключевую тему задания (например: distributions).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** A standard normal distribution is continuous, symmetric, centered at 0, with standard deviation 1, and total area under the curve equal to 1. The only false statement is "area is 2," so the NOT-true option is C.

**Final answer**: C

#### Q5

**Prompt**: In a deck of 52 cards, P(drawing a king or a heart) =  
  
A. 4/52  
B. 13/52  
C. 16/52  
D. 17/52  
E. 1/52

**RU: Вычисление**
- Определяем ключевую тему задания (например: probability-rules).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** Use conditional probability: P(Science | Math) = P(Science and Math) / P(Math). Substituting gives 0.42 / 0.70 = 0.60. The option expressing this setup is C.

**Final answer**: C

#### Q6

**Prompt**: Weights are N(150 lbs, 20 lbs). P(weight between 130 and 170) =  
  
A. 0.32  
B. 0.68  
C. 0.95  
D. 0.99  
E. 0.50

**RU: Вычисление**
- Определяем ключевую тему задания (например: normal-distribution).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** Standardize with z = (186 - 170) / 8 = 2. Then P(X > 186) = P(Z > 2) ≈ 0.0228 from the standard normal table. This corresponds to option B.

**Final answer**: B

#### Q7

**Prompt**: A 90% CI for a difference of means requires:  
  
A. 1.645 × SE  
B. 1.96 × SE  
C. 2.576 × SE  
D. 1.282 × SE  
E. 2.326 × SE

**RU: Вычисление**
- Определяем ключевую тему задания (например: confidence-interval).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: A.

**EN: Explanation** For a 95% margin requirement on a difference of two means with equal SDs, the margin form is z*sqrt(s1^2+s2^2)/sqrt(n). Set 1.96*sqrt(10^2+10^2)/sqrt(n) <= 3 and solve for n. That exact setup is option A.

**Final answer**: A

#### Q8

**Prompt**: r = −0.60 between temperature and heating costs. If costs are measured in euros instead of dollars, r:  
  
A. Becomes positive  
B. Becomes −0.60 × exchange rate  
C. Stays −0.60  
D. Becomes −1  
E. Becomes 0

**RU: Вычисление**
- Определяем ключевую тему задания (например: correlation).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** Correlation near +1 means a strong positive linear association, while correlation near 0 means weak linear association. Correlation does not establish causation. The option consistent with these facts is C.

**Final answer**: C

#### Q9

**Prompt**: A chi-square test for independence for a 4×5 table has df =  
  
A. 20  
B. 12  
C. 9  
D. 15  
E. 8

**RU: Вычисление**
- Определяем ключевую тему задания (например: chi-square).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** A chi-square test compares observed category counts to expected counts under a null model. The statistic sums (O-E)^2/E across categories and is right-tailed. The choice that describes this correctly is option B.

**Final answer**: B

#### Q10

**Prompt**: Expected value of X where P(X=1)=0.5, P(X=2)=0.3, P(X=3)=0.2 is:  
  
A. 2.0  
B. 1.7  
C. 1.5  
D. 2.5  
E. 1.0

**RU: Вычисление**
- Определяем ключевую тему задания (например: expected-value).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** Expected value is the probability-weighted average: E(X)=sum x*p(x). You multiply each outcome by its probability and add, rather than averaging outcomes equally. The correct statement is option B.

**Final answer**: B

#### Q11

**Prompt**: A new drug is tested versus a placebo. Patients are randomly assigned and evaluators don't know which treatment each patient received. This is:  
  
A. Observational study  
B. Single-blind experiment  
C. Double-blind experiment  
D. Matched-pairs design  
E. Block design

**RU: Вычисление**
- Определяем ключевую тему задания (например: experimental-design).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** A well-designed experiment uses random assignment to treatment groups to balance confounders and support causal conclusions. Random sampling affects generalizability, not internal treatment comparison alone. The best answer is option C.

**Final answer**: C

#### Q12

**Prompt**: A regression line has slope 3.5 and intercept 12. Predicted value at x = 5 is:  
  
A. 17.5  
B. 29.5  
C. 12  
D. 3.5  
E. 17

**RU: Вычисление**
- Определяем ключевую тему задания (например: regression).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** Residual = observed y - predicted y-hat. Positive residuals mean underprediction by the model, negative residuals mean overprediction. The option matching this interpretation is B.

**Final answer**: B

#### Q13

**Prompt**: A large simple random sample (n = 200) is drawn from a skewed population. The sampling distribution of x̄ is:  
  
A. Skewed, matching the population  
B. Right-skewed  
C. Approximately normal by CLT  
D. Uniform  
E. Unknown

**RU: Вычисление**
- Определяем ключевую тему задания (например: shape).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** By the central limit theorem, the sampling distribution of the sample mean becomes approximately normal for sufficiently large n (under standard conditions), even if the population is non-normal. The correct choice is option C.

**Final answer**: C

#### Q14

**Prompt**: A Type II error occurs when:  
  
A. H₀ is rejected when it is true.  
B. H₀ is not rejected when it is false.  
C. α is too large.  
D. The sample is too small.  
E. The test is two-tailed.

**RU: Вычисление**
- Определяем ключевую тему задания (например: hypothesis-testing).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** In hypothesis testing, compare the p-value with alpha (or compare the test statistic with a critical threshold). Reject H0 only when evidence is strong enough under the null model. The option expressing this rule is B.

**Final answer**: B

#### Q15

**Prompt**: To reduce non-response bias in a survey, the best approach is:  
  
A. Use a larger sample.  
B. Follow up with non-respondents.  
C. Use cluster sampling.  
D. Increase confidence level.  
E. Use a shorter questionnaire.

**RU: Вычисление**
- Определяем ключевую тему задания (например: bias).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** Bias is a systematic deviation caused by design or measurement issues, not random sampling fluctuation. Increasing sample size reduces random error but does not fix biased collection. Therefore option B is correct.

**Final answer**: B

#### Q16

**Prompt**: P(A) = 0.5, P(B) = 0.4, P(A ∩ B) = 0.2. Are A and B independent?  
  
A. Yes, because 0.5 × 0.4 = 0.2.  
B. No, because they overlap.  
C. Yes, because P(A|B) = P(A).  
D. No, because P(A) ≠ P(B).  
E. Cannot be determined.

**RU: Вычисление**
- Определяем ключевую тему задания (например: independence).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: A.

**EN: Explanation** Independence means P(A and B)=P(A)P(B), equivalently P(A|B)=P(A) when P(B)>0. If this product rule fails, events are dependent. The option stating this criterion is A.

**Final answer**: A

#### Q17

**Prompt**: A 99% CI for a proportion is (0.62, 0.78). The margin of error is:  
  
A. 0.16  
B. 0.08  
C. 0.70  
D. 0.62  
E. 0.78

**RU: Вычисление**
- Определяем ключевую тему задания (например: confidence-interval).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** A confidence interval gives a plausible range for the population parameter based on sample data and method reliability. In repeated sampling, a 95% method captures the true parameter about 95% of the time. The correct interpretation here is option B.

**Final answer**: B

#### Q18

**Prompt**: In a test H₀: μ = 0 vs. H_a: μ > 0, the p-value is:  
  
A. P(Z ≤ z_obs)  
B. P(Z ≥ z_obs)  
C. 2×P(Z ≥ |z_obs|)  
D. P(Z = z_obs)  
E. α

**RU: Вычисление**
- Определяем ключевую тему задания (например: conditions).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** Before inference, check conditions such as randomness/independence and distribution or large-sample requirements for the chosen method. If assumptions fail badly, usual formulas may be invalid. The best option is B.

**Final answer**: B

#### Q19

**Prompt**: A raffle has 300 tickets at $5 each. Three prizes of $100 are awarded. Expected net gain per ticket:  
  
A. $0  
B. −$4  
C. −$3  
D. $1  
E. −$2

**RU: Вычисление**
- Определяем ключевую тему задания (например: expected-value).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** For repeated independent trials, expected total equals number of trials times expected single-trial outcome: E(total)=n*E(X). This linearity rule is fundamental and does not require normality. The option reflecting this is B.

**Final answer**: B

#### Q20

**Prompt**: To increase the power of a test while holding α constant:  
  
A. Decrease n  
B. Use a one-tailed test when two-tailed is appropriate  
C. Increase n  
D. Increase σ  
E. Decrease σ

**RU: Вычисление**
- Определяем ключевую тему задания (например: power).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** Statistical power is P(reject H0 | H1 true): the chance a test detects a real effect. Power increases with larger effects, larger n, lower variability, and a more permissive alpha. The option defining this correctly is C.

**Final answer**: C

### Part B — Free Response

#### Q1

**Prompt**: A school fair game uses a dice roll. Players pay $3. Rolling 6 wins $10; rolling 4 or 5 wins $3; rolling  
1–3 wins $0.  
   (a) Let X be the net gain to the school. Complete the probability distribution.  
  
   (b) Find E(X).  
  
   (c) Minimum plays so expected total net gain ≥ $80?  
  
   (d) In 500 plays, mean = $333, SD = $250. P(total gain > $400) using normal approximation.

**RU: Вычисление**
- Определим чистый результат за игру: выигрыш организатора = стоимость - выплата.
- Исход 1: X=-7, P=0.1667.
- Исход 2: X=0, P=0.3333.
- Исход 3: X=3, P=0.5.
- Матожидание: E(X)=Σ x·p = 0.3333.
- Для ожидаемого суммарного результата не менее 80: n·E(X) >= 80, значит n >= 240 -> минимально n=240.
- Для части (d): z = (400-333)/250 = 0.268.
- P(T >= 400) = P(Z >= 0.268) = 0.3943.

**EN: Explanation** Build the net-gain distribution first, then compute E(X). Use n*E(X) for the minimum plays threshold. In part (d), standardize the total gain with z=(T-mu)/sigma and read the upper-tail normal probability.

**Final answer**: Distribution: -7 (p=0.1667), 0 (p=0.3333), 3 (p=0.5); E(X)=0.3333; min plays=240; P(total >= 400)≈0.3943

#### Q2

**Prompt**: 550 of 900 adults in Region A support stricter air quality standards. 420 of 700 in Region B support it.  
   Is there a significant difference? Test at α = 0.05.

**RU: Вычисление**
- Гипотезы: H0: p1=p2, Ha: p1 != p2.
- p1̂=550/900=0.6111, p2̂=420/700=0.6.
- Объединённая оценка p̂=0.6062.
- SE = sqrt(p̂(1-p̂)(1/n1+1/n2)) = 0.02462.
- z = (p1̂-p2̂)/SE = 0.4513.
- Двустороннее p-value = 0.6518; не отвергаем H0.

**EN: Explanation** Set null and alternative hypotheses for proportion(s), compute the z statistic using the null-based standard error, then compare the p-value to alpha=0.05.

**Final answer**: p1=0.6111, p2=0.6, z=0.4513, p-value=0.6518 => Fail to reject H0

#### Q3

**Prompt**: An economist estimates mean household savings with σ = $2,800. How many households for a 98% CI  
within $600?

**RU: Вычисление**
- Используем формулу для известной σ: n=(z*σ/E)^2.
- Подставляем: n=(2.326*2800/600)^2=117.8238.
- Округляем вверх: n=118.

**EN: Explanation** For a margin-of-error requirement with known sigma, use n=(z*sigma/E)^2 and round up.

**Final answer**: Required minimum sample size: n=118

#### Q4

**Prompt**: Ages of marathon finishers are approximately N(38, 7). 90 samples of size 49 are drawn.  
   (a) Find the mean and SD of the sampling distribution of x̄.  
  
   (b) How many sample means fall between 37 and 39?  
  
   (c) How many fall below 36.5?

**RU: Вычисление**
- Параметры распределения выборочного среднего: μx̄=μ=38, σx̄=σ/√n=1.
- Для интервала [37, 39]: z1=-1, z2=1.
- P(37<=x̄<=39)=0.6827 => ожидаемое число = 61.44 (~61).
- Для порога 36.5: z=-1.5, вероятность=0.0668 => ожидаемое число=6.01 (~6).

**EN: Explanation** Use the sampling distribution of x-bar: mean mu and SD sigma/sqrt(n). Convert bounds to z-scores, compute normal probabilities, then multiply by the number of repeated samples.

**Final answer**: mu_xbar=38, sd_xbar=1; between count≈61.44; below 36.5 count≈6.01

## Variant 9

### Part A — Multiple Choice

#### Q1

**Prompt**: A researcher compares annual incomes of 20 males and 20 females with unknown population variance. The best test is:  
  
A. Paired t-test  
B. Two-sample t-test  
C. One-sample z-test  
D. F-test only  
E. Chi-square

**RU: Вычисление**
- Определяем ключевую тему задания (например: inference).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** This compares means from two independent groups (athletes vs non-athletes), so use a two-sample procedure. Population standard deviations are not given and sample sizes are small, so a two-sample t-test is appropriate (not z, and not paired). That matches option B.

**Final answer**: B

#### Q2

**Prompt**: Prices of products at two stores are compared. Store A has mean $25, median $20. The distribution at Store A is:  
  
A. Symmetric  
B. Skewed left  
C. Skewed right  
D. Bimodal  
E. Normal

**RU: Вычисление**
- Определяем ключевую тему задания (например: descriptive-stats).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** Most scores are around 70-80 with a tail toward lower values, so the distribution is left-skewed. In left skew, the mean is pulled downward below the median. Therefore the statement "median > mean" is the best choice, which is option C.

**Final answer**: C

#### Q3

**Prompt**: A researcher randomly selects 4 of 16 city blocks and surveys all residents in those 4 blocks. This is:  
  
A. Simple random sampling  
B. Stratified sampling  
C. Cluster sampling  
D. Systematic sampling  
E. Purposive sampling

**RU: Вычисление**
- Определяем ключевую тему задания (например: sampling-methods).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** Selecting every 10th employee is the definition of systematic sampling: pick units at a fixed interval after an initial start. It is not simple random, cluster, or stratified sampling. Hence option C is correct.

**Final answer**: C

#### Q4

**Prompt**: Which of the following increases the width of a confidence interval?  
  
A. Increasing n  
B. Increasing confidence level  
C. Decreasing σ  
D. Decreasing confidence level  
E. Increasing α

**RU: Вычисление**
- Определяем ключевую тему задания (например: distributions).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** A standard normal distribution is continuous, symmetric, centered at 0, with standard deviation 1, and total area under the curve equal to 1. The only false statement is "area is 2," so the NOT-true option is B.

**Final answer**: B

#### Q5

**Prompt**: P(A) = 0.4, P(A|B) = 0.4. Are A and B independent?  
  
A. Yes, because P(A|B) = P(A)  
B. No, because they are not mutually exclusive  
C. Yes, because P(B|A) = P(B)  
D. No, because P(A|B) ≠ P(B)  
E. Cannot be determined

**RU: Вычисление**
- Определяем ключевую тему задания (например: probability-rules).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: A.

**EN: Explanation** Use conditional probability: P(Science | Math) = P(Science and Math) / P(Math). Substituting gives 0.42 / 0.70 = 0.60. The option expressing this setup is A.

**Final answer**: A

#### Q6

**Prompt**: In N(50, 8), P(X > 66) =  
  
A. 0.0228  
B. 0.9772  
C. 0.1587  
D. 0.0456  
E. 0.0013

**RU: Вычисление**
- Определяем ключевую тему задания (например: normal-distribution).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: A.

**EN: Explanation** Standardize with z = (186 - 170) / 8 = 2. Then P(X > 186) = P(Z > 2) ≈ 0.0228 from the standard normal table. This corresponds to option A.

**Final answer**: A

#### Q7

**Prompt**: To estimate a mean within E with 99% confidence with σ known, n must satisfy:  
  
A. n ≥ (2.576 σ / E)²  
B. n ≥ (1.96 σ / E)²  
C. n ≥ (2.576 E / σ)²  
D. n ≥ 2.576 σ / E  
E. n ≥ 1.96 / (σ × E)

**RU: Вычисление**
- Определяем ключевую тему задания (например: confidence-interval).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: A.

**EN: Explanation** For a 95% margin requirement on a difference of two means with equal SDs, the margin form is z*sqrt(s1^2+s2^2)/sqrt(n). Set 1.96*sqrt(10^2+10^2)/sqrt(n) <= 3 and solve for n. That exact setup is option A.

**Final answer**: A

#### Q8

**Prompt**: r = 0.85 between x and y. If every x is squared, r generally:  
  
A. Stays 0.85  
B. Changes (squaring changes the linear relationship)  
C. Becomes 0.72  
D. Becomes 1  
E. Doubles

**RU: Вычисление**
- Определяем ключевую тему задания (например: correlation).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** Correlation near +1 means a strong positive linear association, while correlation near 0 means weak linear association. Correlation does not establish causation. The option consistent with these facts is B.

**Final answer**: B

#### Q9

**Prompt**: In a chi-square goodness-of-fit test with 8 categories, df =  
  
A. 8  
B. 7  
C. 6  
D. 9  
E. 4

**RU: Вычисление**
- Определяем ключевую тему задания (например: chi-square).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** A chi-square test compares observed category counts to expected counts under a null model. The statistic sums (O-E)^2/E across categories and is right-tailed. The choice that describes this correctly is option B.

**Final answer**: B

#### Q10

**Prompt**: X takes values 0, 2, 4 with probabilities 0.2, 0.5, 0.3. E(X) =  
  
A. 1.8  
B. 2.0  
C. 2.2  
D. 2.4  
E. 3.0

**RU: Вычисление**
- Определяем ключевую тему задания (например: expected-value).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** Expected value is the probability-weighted average: E(X)=sum x*p(x). You multiply each outcome by its probability and add, rather than averaging outcomes equally. The correct statement is option C.

**Final answer**: C

#### Q11

**Prompt**: Half of patients receive a new drug; the other half receive the current standard. Doctors are told which is which but patients are not. This is:  
  
A. Double-blind  
B. Single-blind  
C. Observational study  
D. Block design  
E. Matched pairs

**RU: Вычисление**
- Определяем ключевую тему задания (например: experimental-design).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** A well-designed experiment uses random assignment to treatment groups to balance confounders and support causal conclusions. Random sampling affects generalizability, not internal treatment comparison alone. The best answer is option B.

**Final answer**: B

#### Q12

**Prompt**: The correlation coefficient r = 0. This means:  
  
A. No relationship between x and y  
B. No linear relationship between x and y  
C. A perfect nonlinear relationship  
D. Slopes are negative  
E. The regression line is vertical

**RU: Вычисление**
- Определяем ключевую тему задания (например: regression).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** Residual = observed y - predicted y-hat. Positive residuals mean underprediction by the model, negative residuals mean overprediction. The option matching this interpretation is B.

**Final answer**: B

#### Q13

**Prompt**: When sampling 40 from a bimodal population, the sampling distribution of x̄ (by CLT) is:  
  
A. Bimodal  
B. Skewed  
C. Approximately normal  
D. Uniform  
E. Unknown

**RU: Вычисление**
- Определяем ключевую тему задания (например: shape).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** By the central limit theorem, the sampling distribution of the sample mean becomes approximately normal for sufficiently large n (under standard conditions), even if the population is non-normal. The correct choice is option C.

**Final answer**: C

#### Q14

**Prompt**: In a hypothesis test, failing to reject H₀ when H₀ is false is:  
  
A. Type I error  
B. Type II error  
C. Correct decision  
D. Power  
E. Significance level

**RU: Вычисление**
- Определяем ключевую тему задания (например: hypothesis-testing).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** In hypothesis testing, compare the p-value with alpha (or compare the test statistic with a critical threshold). Reject H0 only when evidence is strong enough under the null model. The option expressing this rule is B.

**Final answer**: B

#### Q15

**Prompt**: A survey interviewer avoids certain neighborhoods because they seem unsafe. This causes:  
  
A. Response bias  
B. Non-response bias  
C. Undercoverage  
D. Observer effect  
E. Voluntary response bias

**RU: Вычисление**
- Определяем ключевую тему задания (например: bias).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** Bias is a systematic deviation caused by design or measurement issues, not random sampling fluctuation. Increasing sample size reduces random error but does not fix biased collection. Therefore option C is correct.

**Final answer**: C

#### Q16

**Prompt**: P(A) = 0.6, P(not A and not B) = 0.1, P(B) = 0.5. P(A or B) =  
  
A. 0.9  
B. 0.8  
C. 0.7  
D. 0.6  
E. 1.0

**RU: Вычисление**
- Определяем ключевую тему задания (например: independence).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: A.

**EN: Explanation** Independence means P(A and B)=P(A)P(B), equivalently P(A|B)=P(A) when P(B)>0. If this product rule fails, events are dependent. The option stating this criterion is A.

**Final answer**: A

#### Q17

**Prompt**: A 95% CI (22, 30) leads to rejecting H₀: μ = 20 at α = 0.05 in a two-tailed test because:  
  
A. p-value > 0.05  
B. 20 is outside the CI.  
C. The test statistic is negative.  
D. The sample is too small.  
E. μ = 20 is in the CI.

**RU: Вычисление**
- Определяем ключевую тему задания (например: confidence-interval).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** A confidence interval gives a plausible range for the population parameter based on sample data and method reliability. In repeated sampling, a 95% method captures the true parameter about 95% of the time. The correct interpretation here is option B.

**Final answer**: B

#### Q18

**Prompt**: Increasing α from 0.01 to 0.05:  
  
A. Decreases Type I error  
B. Increases Type I error  
C. Decreases power  
D. Increases Type II error  
E. Has no effect

**RU: Вычисление**
- Определяем ключевую тему задания (например: conditions).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** Before inference, check conditions such as randomness/independence and distribution or large-sample requirements for the chosen method. If assumptions fail badly, usual formulas may be invalid. The best option is B.

**Final answer**: B

#### Q19

**Prompt**: A lottery: 1,000 tickets at $4; one $2,000 prize. Expected net gain per ticket:  
  
A. −$2.00  
B. $2.00  
C. −$1.50  
D. −$3.00  
E. −$4.00

**RU: Вычисление**
- Определяем ключевую тему задания (например: expected-value).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: A.

**EN: Explanation** For repeated independent trials, expected total equals number of trials times expected single-trial outcome: E(total)=n*E(X). This linearity rule is fundamental and does not require normality. The option reflecting this is A.

**Final answer**: A

#### Q20

**Prompt**: The p-value in a hypothesis test is 0.03. At α = 0.05:  
  
A. Fail to reject H₀  
B. Reject H₀  
C. Accept H₀  
D. Reject H_a  
E. The test is inconclusive

**RU: Вычисление**
- Определяем ключевую тему задания (например: power).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** Statistical power is P(reject H0 | H1 true): the chance a test detects a real effect. Power increases with larger effects, larger n, lower variability, and a more permissive alpha. The option defining this correctly is B.

**Final answer**: B

### Part B — Free Response

#### Q1

**Prompt**: An arcade game costs $3 to play. The prize distribution: $6 (prob. 0.10), $3 (prob. 0.25), $1 (prob.  
0.30), $0 (prob. 0.35).  
   (a) Let X be the net gain to the arcade. Complete the probability distribution.  
  
   (b) Find E(X).  
  
   (c) Minimum plays for expected total net gain ≥ $250?  
  
   (d) In 600 plays, mean total gain = $900, SD = $450. P(total gain ≥ $800) using normal  
   approximation.

**RU: Вычисление**
- Определим чистый результат за игру: выигрыш организатора = стоимость - выплата.
- Исход 1: X=-3, P=0.1.
- Исход 2: X=0, P=0.25.
- Исход 3: X=2, P=0.3.
- Исход 4: X=3, P=0.35.
- Матожидание: E(X)=Σ x·p = 1.35.
- Для ожидаемого суммарного результата не менее 250: n·E(X) >= 250, значит n >= 185.1852 -> минимально n=186.
- Для части (d): z = (800-900)/450 = -0.2222.
- P(T >= 800) = P(Z >= -0.2222) = 0.5879.

**EN: Explanation** Build the net-gain distribution first, then compute E(X). Use n*E(X) for the minimum plays threshold. In part (d), standardize the total gain with z=(T-mu)/sigma and read the upper-tail normal probability.

**Final answer**: Distribution: -3 (p=0.1), 0 (p=0.25), 2 (p=0.3), 3 (p=0.35); E(X)=1.35; min plays=186; P(total >= 800)≈0.5879

#### Q2

**Prompt**: In 2024, 360 of 600 students passed a standardized test. In 2023, 310 of 550 passed.  
   Is there evidence of improvement? Test at α = 0.05.

**RU: Вычисление**
- Гипотезы: H0: p1=p2, Ha: p1 > p2.
- p1̂=360/600=0.6, p2̂=310/550=0.5636.
- Объединённая оценка p̂=0.5826.
- SE = sqrt(p̂(1-p̂)(1/n1+1/n2)) = 0.02911.
- z = (p1̂-p2̂)/SE = 1.2492.
- Правостороннее p-value = 0.1058; не отвергаем H0.

**EN: Explanation** Set null and alternative hypotheses for proportion(s), compute the z statistic using the null-based standard error, then compare the p-value to alpha=0.05.

**Final answer**: p1=0.6, p2=0.5636, z=1.2492, p-value=0.1058 => Fail to reject H0

#### Q3

**Prompt**: An environmental scientist estimates mean CO₂ concentration with σ = 12 ppm. How many  
measurements for a 95% CI within 3 ppm?

**RU: Вычисление**
- Используем формулу для известной σ: n=(z*σ/E)^2.
- Подставляем: n=(1.96*12/3)^2=61.4656.
- Округляем вверх: n=62.

**EN: Explanation** For a margin-of-error requirement with known sigma, use n=(z*sigma/E)^2 and round up.

**Final answer**: Required minimum sample size: n=62

#### Q4

**Prompt**: Lifetimes of batteries are approximately N(200 hours, 20 hours). 160 samples of size 64 are drawn.  
   (a) Find the mean and SD of the sampling distribution of x̄.  
  
   (b) How many sample means fall between 197.5 and 202.5 hours?  
  
   (c) How many fall above 203 hours?

**RU: Вычисление**
- Параметры распределения выборочного среднего: μx̄=μ=200, σx̄=σ/√n=2.5.
- Для интервала [197.5, 202.5]: z1=-1, z2=1.
- P(197.5<=x̄<=202.5)=0.6827 => ожидаемое число = 109.23 (~109).
- Для порога 203: z=1.2, вероятность=0.1151 => ожидаемое число=18.41 (~18).

**EN: Explanation** Use the sampling distribution of x-bar: mean mu and SD sigma/sqrt(n). Convert bounds to z-scores, compute normal probabilities, then multiply by the number of repeated samples.

**Final answer**: mu_xbar=200, sd_xbar=2.5; between count≈109.23; above 203 count≈18.41

## Variant 10

### Part A — Multiple Choice

#### Q1

**Prompt**: A teacher compares quiz scores of students who received tutoring vs. no tutoring (different students). The best test is:  
  
A. Paired t-test  
B. Two-sample t-test  
C. One-sample z-test  
D. Chi-square test of independence  
E. F-test

**RU: Вычисление**
- Определяем ключевую тему задания (например: inference).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** This compares means from two independent groups (athletes vs non-athletes), so use a two-sample procedure. Population standard deviations are not given and sample sizes are small, so a two-sample t-test is appropriate (not z, and not paired). That matches option B.

**Final answer**: B

#### Q2

**Prompt**: A distribution with mean 45 and median 55 is:  
  
A. Symmetric  
B. Approximately normal  
C. Skewed left  
D. Skewed right  
E. Uniform

**RU: Вычисление**
- Определяем ключевую тему задания (например: descriptive-stats).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** Most scores are around 70-80 with a tail toward lower values, so the distribution is left-skewed. In left skew, the mean is pulled downward below the median. Therefore the statement "median > mean" is the best choice, which is option C.

**Final answer**: C

#### Q3

**Prompt**: Names are arranged alphabetically on a list. A researcher picks the 5th name and every 8th name thereafter. This is:  
  
A. Simple random sampling  
B. Cluster sampling  
C. Stratified sampling  
D. Systematic sampling  
E. Voluntary response

**RU: Вычисление**
- Определяем ключевую тему задания (например: sampling-methods).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: D.

**EN: Explanation** Selecting every 10th employee is the definition of systematic sampling: pick units at a fixed interval after an initial start. It is not simple random, cluster, or stratified sampling. Hence option D is correct.

**Final answer**: D

#### Q4

**Prompt**: The standard error of the sample mean is σ/√n. As n increases, the standard error:  
  
A. Increases  
B. Stays the same  
C. Decreases  
D. Becomes σ  
E. Becomes n × σ

**RU: Вычисление**
- Определяем ключевую тему задания (например: distributions).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** A standard normal distribution is continuous, symmetric, centered at 0, with standard deviation 1, and total area under the curve equal to 1. The only false statement is "area is 2," so the NOT-true option is C.

**Final answer**: C

#### Q5

**Prompt**: P(rolling a 3 or an even number on a fair die) =  
  
A. 1/6  
B. 1/2  
C. 2/3  
D. 4/6  
E. 5/6

**RU: Вычисление**
- Определяем ключевую тему задания (например: probability-rules).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** Use conditional probability: P(Science | Math) = P(Science and Math) / P(Math). Substituting gives 0.42 / 0.70 = 0.60. The option expressing this setup is C.

**Final answer**: C

#### Q6

**Prompt**: Test scores are N(78, 11). P(score > 100) ≈  
  
A. 0.0228  
B. 0.0456  
C. 0.0013  
D. 0.9772  
E. 0.1587

**RU: Вычисление**
- Определяем ключевую тему задания (например: normal-distribution).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: A.

**EN: Explanation** Standardize with z = (186 - 170) / 8 = 2. Then P(X > 186) = P(Z > 2) ≈ 0.0228 from the standard normal table. This corresponds to option A.

**Final answer**: A

#### Q7

**Prompt**: A 95% CI for a proportion is reported as 0.45 ± 0.04. The margin of error is:  
  
A. 0.45  
B. 0.04  
C. 0.49  
D. 0.41  
E. 0.08

**RU: Вычисление**
- Определяем ключевую тему задания (например: confidence-interval).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** For a 95% margin requirement on a difference of two means with equal SDs, the margin form is z*sqrt(s1^2+s2^2)/sqrt(n). Set 1.96*sqrt(10^2+10^2)/sqrt(n) <= 3 and solve for n. That exact setup is option B.

**Final answer**: B

#### Q8

**Prompt**: Correlation r = 0.65. If x and y are swapped, the new correlation is:  
  
A. 0.42  
B. −0.65  
C. 0.65  
D. 1/0.65  
E. 0

**RU: Вычисление**
- Определяем ключевую тему задания (например: correlation).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** Correlation near +1 means a strong positive linear association, while correlation near 0 means weak linear association. Correlation does not establish causation. The option consistent with these facts is C.

**Final answer**: C

#### Q9

**Prompt**: A chi-square statistic of 15.2 with df = 5. The p-value is:  
  
A. Greater than 0.10  
B. Between 0.05 and 0.10  
C. Between 0.01 and 0.05  
D. Less than 0.01  
E. Exactly 0.05

**RU: Вычисление**
- Определяем ключевую тему задания (например: chi-square).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: D.

**EN: Explanation** A chi-square test compares observed category counts to expected counts under a null model. The statistic sums (O-E)^2/E across categories and is right-tailed. The choice that describes this correctly is option D.

**Final answer**: D

#### Q10

**Prompt**: X = 1 with prob 0.3, X = 3 with prob 0.5, X = 5 with prob 0.2. Var(X) =  
  
A. 0.96  
B. 1.41  
C. 2.71  
D. 2.0  
E. 1.56

**RU: Вычисление**
- Определяем ключевую тему задания (например: expected-value).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: D.

**EN: Explanation** Expected value is the probability-weighted average: E(X)=sum x*p(x). You multiply each outcome by its probability and add, rather than averaging outcomes equally. The correct statement is option D.

**Final answer**: D

#### Q11

**Prompt**: Students are matched by GPA then randomly assigned to different study methods. This is:  
  
A. Simple random experiment  
B. Completely randomized design  
C. Randomized block design  
D. Cluster design  
E. Observational study

**RU: Вычисление**
- Определяем ключевую тему задания (например: experimental-design).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** A well-designed experiment uses random assignment to treatment groups to balance confounders and support causal conclusions. Random sampling affects generalizability, not internal treatment comparison alone. The best answer is option C.

**Final answer**: C

#### Q12

**Prompt**: In a regression model, r² = 0.81. This means:  
  
A. r = 0.81  
B. 81% of variation in y is explained by x.  
C. The slope is 0.81.  
D. The intercept is 0.81.  
E. 19% of x is explained by y.

**RU: Вычисление**
- Определяем ключевую тему задания (например: regression).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** Residual = observed y - predicted y-hat. Positive residuals mean underprediction by the model, negative residuals mean overprediction. The option matching this interpretation is B.

**Final answer**: B

#### Q13

**Prompt**: A sample of n = 100 from a skewed population: by CLT, the sampling distribution of x̄ is:  
  
A. Skewed right  
B. Skewed left  
C. Approximately normal  
D. Bimodal  
E. Uniform

**RU: Вычисление**
- Определяем ключевую тему задания (например: shape).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** By the central limit theorem, the sampling distribution of the sample mean becomes approximately normal for sufficiently large n (under standard conditions), even if the population is non-normal. The correct choice is option C.

**Final answer**: C

#### Q14

**Prompt**: The probability of a Type I error is:  
  
A. β  
B. 1 − β  
C. Power  
D. α  
E. 1 − α

**RU: Вычисление**
- Определяем ключевую тему задания (например: hypothesis-testing).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: D.

**EN: Explanation** In hypothesis testing, compare the p-value with alpha (or compare the test statistic with a critical threshold). Reject H0 only when evidence is strong enough under the null model. The option expressing this rule is D.

**Final answer**: D

#### Q15

**Prompt**: A researcher stops surveying before meeting the quota in low-income areas. This introduces:  
  
A. Voluntary response bias  
B. Non-response bias  
C. Undercoverage bias  
D. Measurement error  
E. Observer bias

**RU: Вычисление**
- Определяем ключевую тему задания (например: bias).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** Bias is a systematic deviation caused by design or measurement issues, not random sampling fluctuation. Increasing sample size reduces random error but does not fix biased collection. Therefore option C is correct.

**Final answer**: C

#### Q16

**Prompt**: If P(A) = 0.3, P(B) = 0.4, and A and B are mutually exclusive, P(A|B) =  
  
A. 0.3  
B. 0.4  
C. 0.12  
D. 0  
E. 0.7

**RU: Вычисление**
- Определяем ключевую тему задания (например: independence).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: D.

**EN: Explanation** Independence means P(A and B)=P(A)P(B), equivalently P(A|B)=P(A) when P(B)>0. If this product rule fails, events are dependent. The option stating this criterion is D.

**Final answer**: D

#### Q17

**Prompt**: A confidence interval is described as 'we are 90% confident the true mean is between 14 and 18'. This means:  
  
A. P(14 < μ < 18) = 0.90  
B. 90% of population values are in (14, 18).  
C. The method produces intervals containing μ 90% of the time.  
D. μ = 16 with 90% probability.  
E. The sample mean is 90% accurate.

**RU: Вычисление**
- Определяем ключевую тему задания (например: confidence-interval).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: C.

**EN: Explanation** A confidence interval gives a plausible range for the population parameter based on sample data and method reliability. In repeated sampling, a 95% method captures the true parameter about 95% of the time. The correct interpretation here is option C.

**Final answer**: C

#### Q18

**Prompt**: Increasing the sample size in a hypothesis test:  
  
A. Increases α  
B. Decreases power  
C. Reduces Type I error  
D. Increases power  
E. Has no effect on Type II error

**RU: Вычисление**
- Определяем ключевую тему задания (например: conditions).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: D.

**EN: Explanation** Before inference, check conditions such as randomness/independence and distribution or large-sample requirements for the chosen method. If assumptions fail badly, usual formulas may be invalid. The best option is D.

**Final answer**: D

#### Q19

**Prompt**: 500 tickets at $6 each; one prize of $1,000. Expected net gain per ticket:  
  
A. −$4.00  
B. −$3.00  
C. −$2.00  
D. $4.00  
E. −$5.00

**RU: Вычисление**
- Определяем ключевую тему задания (например: expected-value).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: A.

**EN: Explanation** For repeated independent trials, expected total equals number of trials times expected single-trial outcome: E(total)=n*E(X). This linearity rule is fundamental and does not require normality. The option reflecting this is A.

**Final answer**: A

#### Q20

**Prompt**: If a p-value is 0.001 for a two-tailed test, the conclusion at α = 0.05 is:  
  
A. Fail to reject H₀  
B. Reject H₀  
C. Accept H_a  
D. Increase sample size  
E. The result is inconclusive

**RU: Вычисление**
- Определяем ключевую тему задания (например: power).
- Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.
- Итоговый выбор: B.

**EN: Explanation** Statistical power is P(reject H0 | H1 true): the chance a test detects a real effect. Power increases with larger effects, larger n, lower variability, and a more permissive alpha. The option defining this correctly is B.

**Final answer**: B

### Part B — Free Response

#### Q1

**Prompt**: A charity's dunk tank charges $3 per throw. A hit (prob. 0.20) returns $6 to the player; near hit (prob.  
0.35) returns $1; miss (prob. 0.45) returns nothing.  
   (a) Let X = net gain to charity per throw. Complete the probability distribution.  
  
   (b) Find E(X).  
  
   (c) Minimum throws for expected total gain ≥ $300?  
  
   (d) In 800 throws, mean = $1,240, SD = $600. P(total gain > $1,400) using normal approximation.

**RU: Вычисление**
- Определим чистый результат за игру: выигрыш организатора = стоимость - выплата.
- Исход 1: X=-3, P=0.2.
- Исход 2: X=2, P=0.35.
- Исход 3: X=3, P=0.45.
- Матожидание: E(X)=Σ x·p = 1.45.
- Для ожидаемого суммарного результата не менее 300: n·E(X) >= 300, значит n >= 206.8966 -> минимально n=207.
- Для части (d): z = (1400-1240)/600 = 0.2667.
- P(T >= 1400) = P(Z >= 0.2667) = 0.3949.

**EN: Explanation** Build the net-gain distribution first, then compute E(X). Use n*E(X) for the minimum plays threshold. In part (d), standardize the total gain with z=(T-mu)/sigma and read the upper-tail normal probability.

**Final answer**: Distribution: -3 (p=0.2), 2 (p=0.35), 3 (p=0.45); E(X)=1.45; min plays=207; P(total >= 1400)≈0.3949

#### Q2

**Prompt**: In City X, 400 of 650 adults own smartphones. In City Y, 350 of 600 own smartphones.  
   Is there a significant difference in smartphone ownership? Test at α = 0.05.

**RU: Вычисление**
- Гипотезы: H0: p1=p2, Ha: p1 != p2.
- p1̂=400/650=0.6154, p2̂=350/600=0.5833.
- Объединённая оценка p̂=0.6.
- SE = sqrt(p̂(1-p̂)(1/n1+1/n2)) = 0.02774.
- z = (p1̂-p2̂)/SE = 1.1556.
- Двустороннее p-value = 0.2478; не отвергаем H0.

**EN: Explanation** Set null and alternative hypotheses for proportion(s), compute the z statistic using the null-based standard error, then compare the p-value to alpha=0.05.

**Final answer**: p1=0.6154, p2=0.5833, z=1.1556, p-value=0.2478 => Fail to reject H0

#### Q3

**Prompt**: A geographer estimates mean annual temperature with σ = 3.5°C. How many years of data for a 99%  
CI within 1°C?

**RU: Вычисление**
- Используем формулу для известной σ: n=(z*σ/E)^2.
- Подставляем: n=(2.576*3.5/1)^2=81.2883.
- Округляем вверх: n=82.

**EN: Explanation** For a margin-of-error requirement with known sigma, use n=(z*sigma/E)^2 and round up.

**Final answer**: Required minimum sample size: n=82

#### Q4

**Prompt**: Annual incomes are approximately N($52,000, $9,000). 120 random samples of size 36 are drawn.  
   (a) Find the mean and SD of the sampling distribution of x̄.  
  
   (b) How many sample means fall between $50,500 and $53,500?  
  
   (c) How many fall below $49,000?

**RU: Вычисление**
- Параметры распределения выборочного среднего: μx̄=μ=52000, σx̄=σ/√n=1500.
- Для интервала [50500, 53500]: z1=-1, z2=1.
- P(50500<=x̄<=53500)=0.6827 => ожидаемое число = 81.92 (~82).
- Для порога 49000: z=-2, вероятность=0.0228 => ожидаемое число=2.73 (~3).

**EN: Explanation** Use the sampling distribution of x-bar: mean mu and SD sigma/sqrt(n). Convert bounds to z-scores, compute normal probabilities, then multiply by the number of repeated samples.

**Final answer**: mu_xbar=52000, sd_xbar=1500; between count≈81.92; below 49000 count≈2.73
