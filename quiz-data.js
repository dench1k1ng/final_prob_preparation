window.QUIZ_MARKDOWN = `# Statistics Theory Quiz

Use this file as a fast Q/A revision sheet. Each card has a short answer, essential notation, and one mini example.

## Basic Probability

### Card 1. Combinations
**Question:** Definition of combinations and calculation formula.

**Short answer:** A combination is a selection of \`r\` objects from \`n\` distinct objects when order does not matter. The number of combinations is
\`C(n,r) = n! / (r!(n-r)!)\`, where \`0 <= r <= n\`.

**Key formula / notation:** \`nCr\`, \`C(n,r)\`.

**Mini example:** Choosing 3 students from 10 gives \`C(10,3) = 120\` possible groups.

**What to remember:** Use combinations when order is irrelevant.

### Card 2. Sample Space
**Question:** Sample space. Examples.

**Short answer:** The sample space, usually denoted by \`S\` or \`Omega\`, is the set of all possible outcomes of a random experiment.

**Key formula / notation:** \`S = {all possible outcomes}\`.

**Mini example:** For one coin toss, \`S = {H, T}\`. For one die roll, \`S = {1,2,3,4,5,6}\`.

**What to remember:** Every event is a subset of the sample space.

### Card 3. Random Event
**Question:** Definition of a random event, its notation. Examples.

**Short answer:** A random event is any subset of the sample space. It occurs if the observed outcome belongs to that subset. Events are usually denoted by \`A\`, \`B\`, \`C\`.

**Key formula / notation:** \`A subset of S\`.

**Mini example:** When rolling a die, event \`A = {2,4,6}\` means “an even number occurs.”

**What to remember:** An event may contain one outcome or many outcomes.

### Card 4. Probability of an Event
**Question:** Definition of probability of an event, its notation. Examples.

**Short answer:** The probability of event \`A\`, written \`P(A)\`, is a number between 0 and 1 that measures how likely \`A\` is to occur.

**Key formula / notation:** \`0 <= P(A) <= 1\`, \`P(S) = 1\`, \`P(empty set) = 0\`.

**Mini example:** If the chance of rain tomorrow is 0.3, then \`P(rain) = 0.3\`.

**What to remember:** Probability quantifies uncertainty on a scale from impossible to certain.

### Card 5. Classical Probability
**Question:** Classical definition of probability of an event. Examples.

**Short answer:** If all outcomes are equally likely, then
\`P(A) = number of favorable outcomes / number of all outcomes\`.

**Key formula / notation:** \`P(A) = |A| / |S|\` for equally likely outcomes.

**Mini example:** On one die roll, \`P(odd) = 3/6 = 1/2\`.

**What to remember:** The classical definition works only when outcomes are equally likely.

### Card 6. Properties of Probability
**Question:** Properties of probability.

**Short answer:** Main properties are: \`P(A) >= 0\`, \`P(S)=1\`, \`P(empty set)=0\`, and for mutually exclusive events \`P(A union B)=P(A)+P(B)\`. Also \`P(A^c)=1-P(A)\`.

**Key formula / notation:** Complement: \`A^c\`; addition for disjoint events.

**Mini example:** If \`P(A)=0.7\`, then \`P(A^c)=0.3\`.

**What to remember:** Complement and additivity are the most used basic tools.

### Card 7. Sum of Events
**Question:** Definition of the sum of events. Examples.

**Short answer:** The sum of events \`A + B\` or \`A union B\` means that at least one of the events occurs: \`A\`, or \`B\`, or both.

**Key formula / notation:** \`A union B\`.

**Mini example:** On a die roll, \`A={1,2}\`, \`B={2,3}\`. Then \`A union B={1,2,3}\`.

**What to remember:** “Sum” of events means logical OR.

### Card 8. Product of Events
**Question:** Definition of multiplication of events. Examples.

**Short answer:** The product of events \`AB\` or \`A intersection B\` means that both events occur at the same time.

**Key formula / notation:** \`A intersection B\`.

**Mini example:** On a die roll, \`A={2,4,6}\` and \`B={4,5,6}\`. Then \`A intersection B={4,6}\`.

**What to remember:** “Product” of events means logical AND.

### Card 9. Addition Theorem
**Question:** Theorem of the addition of probabilities.

**Short answer:** For any two events,
\`P(A union B) = P(A) + P(B) - P(A intersection B)\`.
If \`A\` and \`B\` are mutually exclusive, then the intersection term is 0.

**Key formula / notation:** General addition rule.

**Mini example:** If \`P(A)=0.4\`, \`P(B)=0.5\`, \`P(A intersection B)=0.2\`, then \`P(A union B)=0.7\`.

**What to remember:** Subtract the overlap once.

### Card 10. Dependent and Independent Events
**Question:** Dependent and independent events. Examples.

**Short answer:** Events are independent if the occurrence of one does not change the probability of the other. Otherwise they are dependent.

**Key formula / notation:** Independence means \`P(A intersection B)=P(A)P(B)\`.

**Mini example:** Two coin tosses are independent. Drawing two cards without replacement gives dependent events.

**What to remember:** Independence is about “no influence” on probability.

### Card 11. Conditional Probability
**Question:** Conditional probability. Examples.

**Short answer:** Conditional probability is the probability of \`A\` given that \`B\` has occurred:
\`P(A|B) = P(A intersection B) / P(B)\`, provided \`P(B)>0\`.

**Key formula / notation:** \`P(A|B)\`.

**Mini example:** From a deck, given that the card is a face card, the probability it is a king is \`4/12 = 1/3\`.

**What to remember:** The condition changes the sample space.

### Card 12. Multiplication Theorem
**Question:** Theorem of multiplication of probabilities.

**Short answer:** For two events,
\`P(A intersection B) = P(A)P(B|A) = P(B)P(A|B)\`.
If events are independent, this becomes \`P(A intersection B)=P(A)P(B)\`.

**Key formula / notation:** Product rule.

**Mini example:** Probability of drawing two aces without replacement is \`(4/52)(3/51)\`.

**What to remember:** Use conditional probability when events are not independent.

### Card 13. Total Probability Formula
**Question:** Formula of a total probability.

**Short answer:** If \`B1, B2, ..., Bn\` form a partition of the sample space, then
\`P(A)=sum P(A|Bi)P(Bi)\`.

**Key formula / notation:** Partition: mutually exclusive and exhaustive events.

**Mini example:** If a product comes from factory 1 with probability 0.6 and defect rate 0.02, or factory 2 with probability 0.4 and defect rate 0.05, then defect probability is \`0.6*0.02 + 0.4*0.05 = 0.032\`.

**What to remember:** Break a complex event into cases.

### Card 14. Bayes' Rule
**Question:** Bayes' rule.

**Short answer:** Bayes' rule reverses conditioning:
\`P(Bi|A) = P(A|Bi)P(Bi) / P(A)\`,
where \`P(A)\` is usually found by the total probability formula.

**Key formula / notation:** Posterior = likelihood times prior / evidence.

**Mini example:** If a test is positive, Bayes' rule finds the probability the person actually has the disease.

**What to remember:** Bayes updates prior beliefs after observing evidence.

## Random Variables and Distributions

### Card 15. Discrete Random Variables
**Question:** Discrete random variables. Examples.

**Short answer:** A discrete random variable takes countable values, often integers, each with an assigned probability given by a probability mass function (pmf).

**Key formula / notation:** \`p(x)=P(X=x)\`, \`sum p(x)=1\`.

**Mini example:** \`X = number of heads in 3 coin tosses\` takes values \`0,1,2,3\`.

**What to remember:** Discrete variables are counted, not measured on a continuum.

### Card 16. Continuous Random Variables
**Question:** Continuous random variables. Examples.

**Short answer:** A continuous random variable can take any value in an interval and is described by a probability density function (pdf). For a continuous variable, \`P(X=a)=0\`.

**Key formula / notation:** \`P(a <= X <= b)=integral_a^b f(x) dx\`.

**Mini example:** Waiting time for a bus or the height of a person can be modeled as continuous.

**What to remember:** Probabilities come from areas under the density curve.

### Card 17. Binomial Distribution
**Question:** Binomial distribution. Examples.

**Short answer:** A binomial random variable counts the number of successes in \`n\` independent Bernoulli trials with the same success probability \`p\`.

**Key formula / notation:** \`P(X=x)=C(n,x)p^x(1-p)^(n-x)\`, \`x=0,...,n\`.

**Mini example:** Number of defective items in 20 independent inspections when each item is defective with probability 0.1.

**What to remember:** Fixed number of trials, two outcomes, constant \`p\`, independence.

### Card 18. Poisson Distribution
**Question:** Poisson distributions. Examples.

**Short answer:** The Poisson distribution models the number of events occurring in a fixed interval when events happen independently at a constant average rate \`lambda\`.

**Key formula / notation:** \`P(X=x)=e^(-lambda) lambda^x / x!\`, \`x=0,1,2,...\`.

**Mini example:** Number of phone calls arriving in one minute.

**What to remember:** Poisson is a count model for rare or random arrivals over time or space.

### Card 19. Jointly Distributed Random Variables
**Question:** Jointly distributed random variables. Examples.

**Short answer:** Two random variables are jointly distributed when probabilities are assigned to their pairs of values. This allows us to study dependence between them.

**Key formula / notation:** Discrete case: \`p(x,y)=P(X=x, Y=y)\`; continuous case: joint density \`f(x,y)\`.

**Mini example:** \`X = number of boys\` and \`Y = number of girls\` in a two-child family are jointly distributed.

**What to remember:** The joint distribution describes both variables together, not separately.

### Card 20. Uniform Random Variable
**Question:** The uniform random variable. Examples.

**Short answer:** A continuous uniform random variable on \`[a,b]\` has constant density over the interval, so every interval of the same length is equally likely.

**Key formula / notation:** \`f(x)=1/(b-a)\` for \`a <= x <= b\`; mean \`(a+b)/2\`.

**Mini example:** If a bus arrives uniformly between 8:00 and 8:10, then waiting time is uniform on \`[0,10]\` minutes.

**What to remember:** Constant density means equal likelihood per unit length.

### Card 21. Gamma Distribution
**Question:** Gamma distributions. Examples.

**Short answer:** The gamma distribution is a continuous distribution used to model waiting time until the \`k\`-th event in a Poisson process.

**Key formula / notation:** Shape \`k\` and scale \`theta\`; mean \`k theta\`.

**Mini example:** Time until the 3rd customer arrives can be modeled by a gamma distribution.

**What to remember:** Exponential is a special case of gamma when \`k=1\`.

### Card 22. Exponential Distribution
**Question:** Exponential distribution. Examples.

**Short answer:** The exponential distribution models waiting time until the first event in a Poisson process with rate \`lambda\`.

**Key formula / notation:** \`f(x)=lambda e^(-lambda x)\`, \`x>=0\`; mean \`1/lambda\`.

**Mini example:** Time until the next customer arrives at a service desk.

**What to remember:** It has the memoryless property.

### Card 23. Normal Random Variable
**Question:** Normal random variable. Normal distributions. Examples.

**Short answer:** A normal random variable has a bell-shaped symmetric distribution determined by mean \`mu\` and variance \`sigma^2\`. Many natural measurements are approximately normal.

**Key formula / notation:** \`X ~ N(mu, sigma^2)\`.

**Mini example:** Adult heights are often modeled approximately by a normal distribution.

**What to remember:** Symmetry around the mean is a key feature.

### Card 24. Chi-Squared Distribution
**Question:** The chi-squared distribution. Examples.

**Short answer:** A chi-squared random variable with \`k\` degrees of freedom is the sum of squares of \`k\` independent standard normal variables.

**Key formula / notation:** \`X = Z1^2 + ... + Zk^2\`, where each \`Zi ~ N(0,1)\`.

**Mini example:** Chi-squared is used for tests of independence in contingency tables and for confidence intervals for variance.

**What to remember:** It is nonnegative and usually right-skewed.

## Sampling and Limit Results

### Card 25. Sample Mean
**Question:** The sample mean. Examples.

**Short answer:** The sample mean is the arithmetic average of the observations and is used to estimate the population mean.

**Key formula / notation:** \`x-bar = (x1 + x2 + ... + xn)/n\`.

**Mini example:** For data \`2,4,6\`, the sample mean is \`(2+4+6)/3 = 4\`.

**What to remember:** The sample mean is a point estimator of \`mu\`.

### Card 26. Central Limit Theorem
**Question:** The Central Limit Theorem. Examples.

**Short answer:** The Central Limit Theorem states that for a large sample size \`n\`, the sampling distribution of the sample mean is approximately normal, regardless of the population distribution, provided observations are independent and identically distributed with finite variance.

**Key formula / notation:** \`X-bar approx N(mu, sigma^2/n)\` for large \`n\`.

**Mini example:** Even if individual waiting times are skewed, the mean waiting time of 100 customers is approximately normal.

**What to remember:** CLT explains why normal-based inference is so common.

### Card 27. Sample Variance
**Question:** The sample variance. Examples.

**Short answer:** The sample variance measures spread around the sample mean and estimates the population variance.

**Key formula / notation:** \`s^2 = sum (xi - x-bar)^2 / (n-1)\`.

**Mini example:** For data \`3,5,7\`, the mean is 5 and the sample variance is \`[(3-5)^2 + (5-5)^2 + (7-5)^2]/2 = 4\`.

**What to remember:** Divide by \`n-1\` for the unbiased sample variance.

### Card 28. t-Distribution
**Question:** The t-distribution. Examples.

**Short answer:** The t-distribution is a symmetric distribution similar to the normal distribution but with heavier tails. It is used when estimating a normal population mean with unknown population standard deviation.

**Key formula / notation:** Degrees of freedom usually \`n-1\`.

**Mini example:** A one-sample t-interval for a mean uses the t-distribution when \`sigma\` is unknown.

**What to remember:** Smaller samples and unknown \`sigma\` lead to t, not z.

### Card 29. F-Distribution
**Question:** The F-distribution. Examples.

**Short answer:** The F-distribution is the distribution of the ratio of two independent chi-squared variables divided by their degrees of freedom. It is used to compare variances and in ANOVA and regression.

**Key formula / notation:** \`F = (U/df1)/(V/df2)\` where \`U\` and \`V\` are chi-squared.

**Mini example:** Testing whether two normal populations have equal variances uses an F-statistic.

**What to remember:** F is nonnegative and usually right-skewed.

## Estimation and Confidence Intervals

### Card 30. Maximum Likelihood Estimation
**Question:** Maximum likelihood estimation. Examples.

**Short answer:** Maximum likelihood estimation chooses parameter values that make the observed sample most likely.

**Key formula / notation:** Likelihood \`L(theta)\`; choose \`theta-hat\` that maximizes \`L(theta)\`.

**Mini example:** For Bernoulli data, the MLE of \`p\` is the sample proportion \`x/n\`.

**What to remember:** MLE finds the parameter best supported by the data.

### Card 31. Interval Estimates
**Question:** Interval estimates. Examples.

**Short answer:** An interval estimate gives a range of plausible values for a population parameter instead of a single number.

**Key formula / notation:** Estimate \`+-\` margin of error.

**Mini example:** Saying the mean weight is between 68 and 72 kg is an interval estimate.

**What to remember:** Interval estimates express uncertainty better than point estimates alone.

### Card 32. Confidence Intervals for a Normal Mean
**Question:** Confidence intervals for a normal mean. Examples.

**Short answer:** A confidence interval for a normal mean estimates \`mu\` using sample data. Use a z-interval if \`sigma\` is known and a t-interval if \`sigma\` is unknown.

**Key formula / notation:** Known \`sigma\`: \`x-bar +- z_(alpha/2) sigma/sqrt(n)\`; unknown \`sigma\`: \`x-bar +- t_(alpha/2,n-1) s/sqrt(n)\`.

**Mini example:** If \`x-bar=50\`, \`sigma=10\`, \`n=100\`, a 95% z-interval is \`50 +- 1.96\`, or \`(48.04, 51.96)\`.

**What to remember:** Choose z or t based on whether \`sigma\` is known.

### Card 33. Confidence Interval for a Bernoulli Random Variable
**Question:** CI for Bernoulli random variable. Examples.

**Short answer:** For Bernoulli data, the parameter of interest is the population proportion \`p\`. A confidence interval estimates the plausible range of \`p\`.

**Key formula / notation:** \`p-hat +- z_(alpha/2) sqrt(p-hat(1-p-hat)/n)\`.

**Mini example:** If 60 of 100 voters support a candidate, then \`p-hat=0.6\` and a 95% interval is approximately \`0.6 +- 0.096\`.

**What to remember:** Bernoulli CI is a confidence interval for a proportion.

## Hypothesis Testing

### Card 34. Hypothesis Testing
**Question:** Hypothesis testing. Examples.

**Short answer:** Hypothesis testing is a statistical procedure for deciding whether sample evidence is strong enough to reject a null hypothesis \`H0\` in favor of an alternative hypothesis \`H1\`.

**Key formula / notation:** \`H0\`, \`H1\`, test statistic, rejection region, p-value.

**Mini example:** Test whether the mean battery life is 10 hours versus not 10 hours.

**What to remember:** We do not prove \`H1\`; we test whether data contradict \`H0\` strongly enough.

### Card 35. Significance Levels
**Question:** Significance levels. Examples.

**Short answer:** The significance level \`alpha\` is the probability of making a Type I error, that is, rejecting \`H0\` when \`H0\` is true.

**Key formula / notation:** Common choices: \`alpha = 0.05\` or \`0.01\`.

**Mini example:** If \`alpha=0.05\`, we accept a 5% risk of false rejection of the null hypothesis.

**What to remember:** \`alpha\` is set before looking at the data.

### Card 36. Tests on Two Means
**Question:** Tests on two means. Examples.

**Short answer:** Tests on two means compare the average values of two populations or treatments to determine whether there is a significant difference.

**Key formula / notation:** Common cases: independent samples, paired samples, equal or unequal variances.

**Mini example:** Compare average exam scores of students taught by two different methods.

**What to remember:** First identify whether samples are independent or paired.

### Card 37. Type I and Type II Errors
**Question:** Type I and Type II errors. Examples.

**Short answer:** A Type I error means rejecting a true \`H0\`. A Type II error means failing to reject a false \`H0\`.

**Key formula / notation:** \`P(Type I error)=alpha\`; \`P(Type II error)=beta\`; power \`=1-beta\`.

**Mini example:** In medical screening, a false alarm is Type I, and missing a real disease effect is Type II.

**What to remember:** Type I = false positive, Type II = false negative.

### Card 38. p-Value and t-Test
**Question:** p-value, t-test. Examples.

**Short answer:** The p-value is the probability, assuming \`H0\` is true, of observing a result at least as extreme as the sample result. A t-test uses the t-distribution to test hypotheses about a mean when \`sigma\` is unknown.

**Key formula / notation:** One-sample t-statistic: \`t = (x-bar - mu0)/(s/sqrt(n))\`.

**Mini example:** If a one-sample t-test gives \`p=0.02\` and \`alpha=0.05\`, reject \`H0\`.

**What to remember:** Small p-values indicate stronger evidence against \`H0\`.

### Card 39. Testing Means of a Normal Population
**Question:** Testing means of a normal population. Examples.

**Short answer:** To test a mean of a normal population, use a z-test if \`sigma\` is known and a t-test if \`sigma\` is unknown. The decision depends on the test statistic and p-value or critical region.

**Key formula / notation:** z-statistic or t-statistic depending on available information.

**Mini example:** Test whether the mean fill volume of bottles is 500 ml using a random sample.

**What to remember:** Normal-population mean testing is one of the standard applications of z and t procedures.

## Regression

### Card 40. Simple Linear Regression Model
**Question:** Simple linear regression model. Examples.

**Short answer:** The simple linear regression model relates a response variable \`Y\` to one explanatory variable \`X\` by
\`Y = beta0 + beta1 X + epsilon\`,
where \`epsilon\` is a random error term.

**Key formula / notation:** Intercept \`beta0\`, slope \`beta1\`.

**Mini example:** Predicting exam score from hours of study.

**What to remember:** The slope measures the expected change in \`Y\` for a one-unit increase in \`X\`.

### Card 41. Least Squares and the Fitted Model
**Question:** Least squares and the fitted model. Examples.

**Short answer:** The least squares method estimates the regression line by choosing coefficients that minimize the sum of squared residuals. The fitted model is
\`y-hat = b0 + b1 x\`.

**Key formula / notation:** Residual \`e = y - y-hat\`.

**Mini example:** If a fitted line is \`y-hat = 50 + 3x\`, then at \`x=4\` the predicted value is 62.

**What to remember:** Least squares finds the line that best fits the observed data in the squared-error sense.

### Card 42. Properties of Least Squares Estimators
**Question:** Properties of least squares estimators. Examples.

**Short answer:** Under the standard regression assumptions, least squares estimators are unbiased for \`beta0\` and \`beta1\`, have minimum variance among linear unbiased estimators, and are normally distributed if the errors are normal.

**Key formula / notation:** BLUE = Best Linear Unbiased Estimator.

**Mini example:** If the model assumptions hold, repeated sampling will center the slope estimates around the true slope.

**What to remember:** These properties depend on the regression assumptions being reasonable.

### Card 43. Inferences for Regression Coefficients
**Question:** Inferences for regression coefficients. Examples.

**Short answer:** Inference for regression coefficients includes confidence intervals and hypothesis tests for \`beta0\` and \`beta1\`, especially testing whether the slope differs from 0.

**Key formula / notation:** Common test: \`H0: beta1 = 0\` versus \`H1: beta1 != 0\`.

**Mini example:** In a study of advertising and sales, testing \`beta1=0\` checks whether advertising is significantly related to sales.

**What to remember:** If the slope is significantly different from 0, \`X\` provides useful linear information about \`Y\`.

## PDF Practice Answers

### Card 44. Outlier
**Question:** What is an outlier?

**Short answer:** An outlier is an observation that is significantly and abnormally different from the rest of the data set.

**Key formula / notation:** Outliers are identified by unusually large or small values compared with the main cluster.

**Mini example:** In a mostly centered score list, one value of 99 when the rest are between 40 and 60 may be an outlier.

**What to remember:** Outliers can pull the mean, so the median is often more robust.

### Card 45. Weighted Mean
**Question:** How do you find the combined mean of two groups?

**Short answer:** Use the weighted mean: multiply each group mean by its sample size, add the totals, then divide by the combined sample size.

**Key formula / notation:** \`x-bar = (n1*x1 + n2*x2)/(n1+n2)\`.

**Mini example:** For means 28500 and 22500 with sizes 128 and 32, the combined mean is \`(128*28500 + 32*22500)/160 = 27300\`.

**What to remember:** Do not average the means directly unless the group sizes are equal.

### Card 46. Robust Center
**Question:** Which measure of center is best for a right-skewed distribution with an outlier?

**Short answer:** The median is the best choice because it is resistant to skewness and extreme values.

**Key formula / notation:** Median = middle ordered value.

**Mini example:** If a distribution has one very large value, the median usually stays near the center of the bulk of the data.

**What to remember:** For skewed data, median is usually more representative than the mean.

### Card 47. Total Probability
**Question:** How do you compute the total probability of an event from two conditions?

**Short answer:** Use the law of total probability: \`P(A) = P(A|B1)P(B1) + P(A|B2)P(B2)\`.

**Key formula / notation:** Partition-based sum of conditional probabilities.

**Mini example:** If the probability of a failure is 0.002 in dry weather and 0.01 in wet weather, with wet weather probability 0.2, then total failure probability is \`0.8*0.002 + 0.2*0.01 = 0.0036\`.

**What to remember:** Split the problem into cases, then add the weighted contributions.

### Card 48. Normal Tail Probability
**Question:** How do you find \`P(X > 225)\` for \`X ~ N(210, 10^2)\`?

**Short answer:** Standardize with the z-score: \`z = (225 - 210)/10 = 1.5\`, then use the standard normal table.

**Key formula / notation:** \`P(X > x) = P(Z > (x-mu)/sigma)\`.

**Mini example:** \`P(X > 225) = P(Z > 1.5) = 0.0668\`.

**What to remember:** Convert normal probabilities to z-scores first.

### Card 49. Uniform Interval Probabilities
**Question:** How do you compute probabilities for a uniform random variable on \`[7, 10]\`?

**Short answer:** For a uniform variable, probability equals interval length divided by total length.

**Key formula / notation:** \`P(a <= X <= b) = (b-a)/(10-7)\` for \`X ~ U(7,10)\`.

**Mini example:** \`P(X <= 8.8) = (8.8-7)/3 = 0.6\`, and \`P(7.4 < X < 9.5) = (9.5-7.4)/3 = 0.7\`.

**What to remember:** Uniform distributions have constant density.

### Card 50. Sample Space for Cash Envelopes
**Question:** What is the sample space and probability of getting less than $100 from the envelope problem?

**Short answer:** The sample space is \`{10, 25, 100}\` with probabilities \`275/500\`, \`150/500\`, and \`75/500\`.

**Key formula / notation:** \`P(X < 100) = P(10) + P(25)\`.

**Mini example:** \`P(X < 100) = (275 + 150)/500 = 0.85\`.

**What to remember:** List all distinct outcomes first, then assign probabilities.

### Card 51. Sample Mean, Median, and Mode
**Question:** Find the mean, median, and mode of \`5, 11, 9, 5, 10, 15, 6, 10, 5, 10\`.

**Short answer:** The mean is \`8.6\`, the median is \`9.5\`, and the data are bimodal with modes \`5\` and \`10\`.

**Key formula / notation:** Mean = sum divided by \`n\`; median = middle value(s); mode = most frequent value(s).

**Mini example:** Sorted data are \`5,5,5,6,9,10,10,10,11,15\`.

**What to remember:** Check for more than one mode.

### Card 52. Confidence Interval from a Sample
**Question:** How do you build a 98% confidence interval for a mean when \`n = 50\`, \`x-bar = 174.5\`, and \`s = 6.9\`?

**Short answer:** Use the large-sample z-interval approximation: \`x-bar +- z_(0.01) * s/sqrt(n)\`, giving approximately \`(172.2, 176.8)\`.

**Key formula / notation:** Margin of error \`= z_(alpha/2) * s/sqrt(n)\`.

**Mini example:** With \`z_(0.01) approx 2.326\`, the error bound is about \`2.3\` cm.

**What to remember:** Confidence intervals are centered at the sample mean.

### Card 53. Confidence Interval for Tread Life
**Question:** Construct a 95% confidence interval for the mean tread life when \`n = 10\`, \`x-bar = 0.32\`, and \`s = 0.09\`.

**Short answer:** Using the t-distribution with \`df = 9\`, the interval is approximately \`0.32 +- 0.064\`, or \`(0.256, 0.384)\`.

**Key formula / notation:** \`x-bar +- t_(alpha/2, n-1) * s/sqrt(n)\`.

**Mini example:** The value \`0.30\` lies inside this interval, so it is reasonable.

**What to remember:** Use t when \`sigma\` is unknown and the sample is small.
`;
