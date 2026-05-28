# Sample Final Exams Quiz

Use this file as a focused oral-practice deck based on sample final exam cards. Each card has two theory prompts with concise answers.

## Sample Final Exams

### Card 1. Discrete Variables and p-Value t-Test
**Question:** Q1. Discrete random variables. Examples.

Q2. p-value, t-Test. Examples.

**Short answer:** A1. A discrete random variable takes countable values with probabilities given by a pmf, \(p(x)=P(X=x)\), and \(\sum_x p(x)=1\). Example: number of heads in 3 tosses (0,1,2,3).

A2. In a t-test, the p-value is the probability, assuming \(H_0\) is true, of observing a test statistic at least as extreme as the one obtained. Example: one-sample t-test for \(H_0:\mu=50\) from sample data.

**Key formula / notation:** \(p(x)=P(X=x)\); \(t=(\bar X-\mu_0)/(s/\sqrt{n})\); p-value from t distribution under \(H_0\).

**Mini example:** Q1: If \(X\)=defects in one item with values 0,1,2 and probabilities 0.7, 0.25, 0.05, then \(X\) is discrete. Q2: If t = 2.3 with df = 19 in a two-sided test, p-value is \(2P(T_{19}\ge2.3)\).

**What to remember:** Discrete variables use point probabilities; p-value measures evidence against \(H_0\), not probability that \(H_0\) is true.

### Card 2. Sample Space and CLT
**Question:** Q1. Sample space. Examples.

Q2. The Central Limit Theorem. Examples.

**Short answer:** A1. A sample space \(S\) is the set of all possible outcomes of a random experiment. Example: one die roll \(S=\{1,2,3,4,5,6\}\).

A2. The CLT states that for large \(n\), the standardized sample mean is approximately normal, regardless of the population shape (with finite variance). Example: average daily sales from skewed data becomes near-normal for large samples.

**Key formula / notation:** \(S\)=set of outcomes; \((\bar X-\mu)/(\sigma/\sqrt{n})\approx N(0,1)\).

**Mini example:** Q1: Two coin tosses: \(S=\{HH,HT,TH,TT\}\). Q2: If \(\mu=100,\sigma=20,n=64\), then \(\bar X\approx N(100,2.5^2)\).

**What to remember:** Sample space defines all outcomes; CLT justifies normal-based inference for means at large \(n\).

### Card 3. Interval Estimates and Sample Mean
**Question:** Q1. Interval Estimates. Examples.

Q2. The sample mean. Examples.

**Short answer:** A1. An interval estimate gives a range of plausible values for a population parameter with a confidence level. Example: 95% CI for mean height.

A2. The sample mean \(\bar X\) is the arithmetic average of observations and estimates population mean \(\mu\). Example: for 4, 6, 10, mean is 6.67.

**Key formula / notation:** CI form: estimator \(\pm\) margin of error; \(\bar X=\frac{1}{n}\sum_{i=1}^n X_i\).

**Mini example:** Q1: \(\bar x=50\), SE=2, 95% CI \(\approx 50\pm1.96\cdot2=(46.08,53.92)\). Q2: Sample 2,5,8 gives \(\bar x=5\).

**What to remember:** Point estimates give one value; interval estimates communicate uncertainty.

### Card 4. Regression Coefficient Inference and Exponential
**Question:** Q1. Inferences for regression coefficients. Examples.

Q2. Exponential Distribution. Examples.

**Short answer:** A1. In simple linear regression, inference for \(\beta_1\) uses t-tests and confidence intervals to decide if predictor effect is nonzero. Example: test \(H_0:\beta_1=0\).

A2. The exponential distribution models waiting times between Poisson events with rate \(\lambda\). Example: time between customer arrivals.

**Key formula / notation:** \(t=(\hat\beta_1-\beta_{1,0})/SE(\hat\beta_1)\); \(f(x)=\lambda e^{-\lambda x}, x\ge0\); \(E[X]=1/\lambda\).

**Mini example:** Q1: If \(\hat\beta_1=2.1\), SE=0.7, then t=3.0 suggests significant slope. Q2: With \(\lambda=0.5\), mean waiting time is 2 units.

**What to remember:** Regression inference asks whether coefficients differ from hypothesized values; exponential is memoryless waiting-time model.

### Card 5. Probability Properties and Sample Variance
**Question:** Q1. Properties of probability.

Q2. The sample variance. Examples.

**Short answer:** A1. Core properties: \(0\le P(A)\le1\), \(P(S)=1\), \(P(A^c)=1-P(A)\), and for disjoint events \(P(A\cup B)=P(A)+P(B)\).

A2. Sample variance measures spread around the sample mean and estimates population variance. Example: larger spread gives larger variance.

**Key formula / notation:** \(P(A\cup B)=P(A)+P(B)-P(A\cap B)\); \(s^2=\frac{1}{n-1}\sum (X_i-\bar X)^2\).

**Mini example:** Q1: If \(P(A)=0.7\), then \(P(A^c)=0.3\). Q2: For 2,4,6, \(\bar x=4\), \(s^2=(4+0+4)/2=4\).

**What to remember:** Probability rules control event calculations; variance captures dispersion, not center.

### Card 6. Combinations and Two-Mean Tests
**Question:** Q1. Definition of combinations and calculation formula.

Q2. Tests on two means. Examples.

**Short answer:** A1. Combinations count selections where order does not matter: choose \(r\) from \(n\). Example: committee selection.

A2. Tests on two means compare population means using independent-samples t-test or paired t-test, depending on design. Example: compare average scores of two classes.

**Key formula / notation:** \(\binom{n}{r}=\frac{n!}{r!(n-r)!}\); for independent means: \(t=(\bar X_1-\bar X_2-\Delta_0)/SE\).

**Mini example:** Q1: \(\binom{10}{3}=120\). Q2: If \(\bar x_1-\bar x_2=5\), SE=2, then t=2.5 for testing equal means.

**What to remember:** Use combinations for unordered choices; choose paired vs independent test by sampling design.

### Card 7. Multiplication Theorem and OLS Properties
**Question:** Q1. Theorem of multiplication of probabilities.

Q2. Properties of least squares estimators. Examples.

**Short answer:** A1. Multiplication theorem: \(P(A\cap B)=P(A)P(B\mid A)=P(B)P(A\mid B)\). If independent, \(P(A\cap B)=P(A)P(B)\).

A2. Under Gauss-Markov assumptions, OLS estimators are unbiased and have minimum variance among linear unbiased estimators (BLUE). Example: \(E[\hat\beta_1]=\beta_1\).

**Key formula / notation:** Product rule above; OLS in matrix form \(\hat\beta=(X'X)^{-1}X'Y\).

**Mini example:** Q1: Two cards without replacement: \(P(A\cap B)=P(A)P(B\mid A)\). Q2: In repeated sampling, average estimated slope equals true slope.

**What to remember:** Multiplication handles joint events; OLS quality depends on model assumptions.

### Card 8. Joint Distribution and Hypothesis Testing
**Question:** Q1. Jointly distributed random variables. Examples.

Q2. Hypothesis Testing. Examples.

**Short answer:** A1. Joint distribution describes probabilities (or density) for pairs \((X,Y)\), enabling dependence analysis. Example: study hours and exam score.

A2. Hypothesis testing is a formal procedure to evaluate a claim about a parameter using sample data via \(H_0\), \(H_1\), test statistic, and decision rule.

**Key formula / notation:** Discrete: \(p_{X,Y}(x,y)=P(X=x,Y=y)\); testing: reject \(H_0\) if statistic falls in critical region.

**Mini example:** Q1: Table of \(P(X=x,Y=y)\) for two Bernoulli variables. Q2: Test \(H_0:\mu=10\) vs \(H_1:\mu\ne10\) with one-sample t-test.

**What to remember:** Joint distributions model variables together; tests make decisions under uncertainty.

### Card 9. Random Event and Normal-Mean Test
**Question:** Q1. Definition of a random event, its notation. Examples.

Q2. Testing means of a Normal Population. Examples.

**Short answer:** A1. A random event is a subset of sample space, usually denoted \(A,B,C\), and occurs when the outcome belongs to that subset.

A2. For a normal population mean, use z-test if \(\sigma\) known, t-test if \(\sigma\) unknown. Example: test if process mean equals target.

**Key formula / notation:** Event \(A\subseteq S\); z-test \(z=(\bar X-\mu_0)/(\sigma/\sqrt n)\), t-test replaces \(\sigma\) by \(s\).

**Mini example:** Q1: Die roll event \(A=\{2,4,6\}\). Q2: If \(\bar x=102,\mu_0=100,\sigma=8,n=64\), z=2.0.

**What to remember:** Events are sets; mean-testing method depends on whether population SD is known.

### Card 10. Addition Theorem and MLE
**Question:** Q1. Theorem of the addition of probabilities.

Q2. Maximum Likelihood Estimation. Examples.

**Short answer:** A1. Addition theorem: \(P(A\cup B)=P(A)+P(B)-P(A\cap B)\), preventing double-counting overlap.

A2. MLE chooses parameter values maximizing likelihood of observed data. Example: Bernoulli sample MLE \(\hat p=\bar X\).

**Key formula / notation:** Addition rule above; \(\hat\theta=\arg\max_\theta L(\theta\mid x)\).

**Mini example:** Q1: \(0.5+0.4-0.2=0.7\). Q2: For 7 successes in 10 trials, \(\hat p=0.7\).

**What to remember:** Addition rule handles OR events; MLE picks most data-supported parameter.

### Card 11. Classical Probability and Bernoulli CI
**Question:** Q1. Classical definition of probability of an event. Examples.

Q2. CI for Bernoulli random variable. Examples.

**Short answer:** A1. Classical probability applies to equally likely outcomes: \(P(A)=|A|/|S|\). Example: even number on die is 3/6.

A2. For Bernoulli proportion \(p\), a CI is built around \(\hat p\) using standard error \(\sqrt{\hat p(1-\hat p)/n}\). Example: 95% CI for survey proportion.

**Key formula / notation:** \(P(A)=|A|/|S|\); approximate CI: \(\hat p\pm z_{\alpha/2}\sqrt{\hat p(1-\hat p)/n}\).

**Mini example:** Q1: Drawing a heart from deck: \(13/52=1/4\). Q2: \(\hat p=0.6,n=100\): 95% CI \(\approx0.6\pm0.096\).

**What to remember:** Classical formula needs equiprobability; Bernoulli CI quantifies uncertainty in proportion.

### Card 12. Conditional Probability and SLR Model
**Question:** Q1. Conditional probability. Examples.

Q2. Simple linear regression model. Examples.

**Short answer:** A1. Conditional probability is probability of \(A\) given \(B\): \(P(A\mid B)=P(A\cap B)/P(B)\), \(P(B)>0\).

A2. Simple linear regression models relation between response and one predictor: \(Y=\beta_0+\beta_1X+\varepsilon\).

**Key formula / notation:** \(P(A\mid B)=P(A\cap B)/P(B)\); regression line \(E[Y\mid X]=\beta_0+\beta_1X\).

**Mini example:** Q1: Given selected card is face card, \(P(king)=4/12\). Q2: Predict exam score from study hours with fitted line.

**What to remember:** Conditioning shrinks sample space; SLR separates systematic trend and random error.

### Card 13. Sample Space and t Distribution
**Question:** Q1. Sample space. Examples.

Q2. The t – Distribution. Examples.

**Short answer:** A1. Sample space is complete set of possible outcomes of an experiment. Example: toss two coins.

A2. t distribution is symmetric, bell-shaped, heavier-tailed than normal, and depends on degrees of freedom; used when \(\sigma\) unknown.

**Key formula / notation:** \(S\) outcome set; if \(Z\sim N(0,1),U\sim\chi^2_\nu\), then \(T=Z/\sqrt{U/\nu}\sim t_\nu\).

**Mini example:** Q1: \(S=\{HH,HT,TH,TT\}\). Q2: One-sample t CI for mean with n=15 uses \(t_{14}\).

**What to remember:** t approaches normal as df increases.

### Card 14. Bayes Rule and Type I/II Errors
**Question:** Q1. Bayes’ rule. Examples.

Q2. Type I and Type II errors. Examples.

**Short answer:** A1. Bayes rule updates prior probabilities after evidence: \(P(B_i\mid A)=P(A\mid B_i)P(B_i)/P(A)\).

A2. Type I error: reject true \(H_0\) (false positive). Type II error: fail to reject false \(H_0\) (false negative).

**Key formula / notation:** Bayes formula above; \(\alpha=P(\text{Type I})\), \(\beta=P(\text{Type II})\).

**Mini example:** Q1: Disease-test posterior probability after positive result. Q2: Quality control falsely rejecting good lot (Type I), missing bad lot (Type II).

**What to remember:** Bayes updates beliefs; error types describe wrong test decisions.

### Card 15. Product of Events and Chi-Squared
**Question:** Q1. Definition of multiplication of events. Examples.

Q2. The Chi-Squared Distribution. Examples.

**Short answer:** A1. Multiplication (product) of events means intersection: \(AB=A\cap B\), both occur.

A2. Chi-squared distribution is the distribution of sum of squares of independent standard normals; used for variance inference and categorical tests.

**Key formula / notation:** \(A\cap B\); if \(Z_i\sim N(0,1)\), then \(\sum_{i=1}^\nu Z_i^2\sim\chi^2_\nu\).

**Mini example:** Q1: Roll die, \(A=\{even\}\), \(B=\{>3\}\), \(A\cap B=\{4,6\}\). Q2: \(\chi^2\) test for goodness-of-fit to expected category counts.

**What to remember:** Intersection means AND; chi-squared is nonnegative and right-skewed.

### Card 16. Dependence and CLT
**Question:** Q1. Dependent and independent events. Examples.

Q2. The Central Limit Theorem. Examples.

**Short answer:** A1. Events are independent if \(P(A\cap B)=P(A)P(B)\); otherwise dependent. Example: coin tosses independent, card draws without replacement dependent.

A2. CLT: sample mean tends to normal for large \(n\), with mean \(\mu\) and variance \(\sigma^2/n\).

**Key formula / notation:** Independence condition above; \(\bar X\approx N(\mu,\sigma^2/n)\) for large \(n\).

**Mini example:** Q1: First draw ace changes second-draw ace probability (dependent). Q2: Average of 100 observations has SE \(\sigma/10\).

**What to remember:** Dependence affects probability rules; CLT enables approximate inference.

### Card 17. Normal Variable and Significance Level
**Question:** Q1. Normal Random Variable. Examples.

Q2. Significance levels. Examples.

**Short answer:** A1. A normal random variable has bell-shaped density defined by mean \(\mu\) and variance \(\sigma^2\). Example: measurement errors.

A2. Significance level \(\alpha\) is the preset probability of Type I error used as rejection threshold (e.g., 0.05).

**Key formula / notation:** \(X\sim N(\mu,\sigma^2)\); reject \(H_0\) if p-value \(\le\alpha\).

**Mini example:** Q1: Adult heights often modeled approximately normal. Q2: If p=0.03 and \(\alpha=0.05\), reject \(H_0\).

**What to remember:** Normal model is central in statistics; \(\alpha\) is chosen before seeing data.

### Card 18. Sum of Events and Uniform
**Question:** Q1. Definition of the sum of events. Examples.

Q2. The Uniform Random Variable. Examples.

**Short answer:** A1. Sum of events means union: \(A+B=A\cup B\), at least one event occurs.

A2. Continuous uniform variable on \([a,b]\) has constant density; equal-length intervals have equal probability.

**Key formula / notation:** \(A\cup B\); \(f(x)=1/(b-a), a\le x\le b\).

**Mini example:** Q1: If \(A=\{1,2\},B=\{2,3\}\), then \(A\cup B=\{1,2,3\}\). Q2: Random arrival time between 0 and 10 min is \(U(0,10)\).

**What to remember:** Union means OR; uniform means flat density.

### Card 19. Probability Notation and Fitted Model
**Question:** Q1. Definition of probability of an event, its notation. Examples.

Q2. Least squares and the fitted model. Examples.

**Short answer:** A1. Probability of event \(A\), denoted \(P(A)\), quantifies chance of occurrence between 0 and 1.

A2. Least squares estimates regression coefficients by minimizing sum of squared residuals, producing fitted line \(\hat y=\hat\beta_0+\hat\beta_1x\).

**Key formula / notation:** \(0\le P(A)\le1\); minimize \(\sum (y_i-\hat y_i)^2\).

**Mini example:** Q1: Fair coin \(P(H)=0.5\). Q2: Fit score vs hours and use line to predict score at 6 hours.

**What to remember:** Probability is numeric uncertainty; least squares gives best-fitting linear trend by SSE criterion.

### Card 20. Total Probability and CI for Mean
**Question:** Q1. Formula of a total probability.

Q2. Confidence intervals for a normal mean. Examples.

**Short answer:** A1. If \(B_1,...,B_n\) partition sample space, then \(P(A)=\sum_i P(A\mid B_i)P(B_i)\).

A2. CI for normal mean uses z if \(\sigma\) known, t if \(\sigma\) unknown. Example: 95% CI around \(\bar x\).

**Key formula / notation:** Total probability formula above; \(\bar x\pm z_{\alpha/2}\sigma/\sqrt n\) or \(\bar x\pm t_{\alpha/2,df}s/\sqrt n\).

**Mini example:** Q1: Defect chance from two factories weighted by production shares. Q2: \(\bar x=20,s=4,n=25\) gives t-based CI \(20\pm t\cdot0.8\).

**What to remember:** Total probability is weighted averaging over cases; CI method depends on known/unknown \(\sigma\).

### Card 21. Continuous Variables and F Distribution
**Question:** Q1. Continuous random variables. Examples.

Q2. The F - Distribution. Examples.

**Short answer:** A1. Continuous variables take values on intervals and are modeled by densities; probability at one exact point is zero.

A2. F distribution is ratio of two scaled independent chi-squared variables; used in ANOVA and overall regression significance.

**Key formula / notation:** \(P(a\le X\le b)=\int_a^b f(x)dx\); \(F=(U_1/\nu_1)/(U_2/\nu_2)\) with \(U_i\sim\chi^2_{\nu_i}\).

**Mini example:** Q1: Temperature as continuous variable. Q2: ANOVA F-test compares between-group and within-group variability.

**What to remember:** Continuous probabilities are areas; F is nonnegative and right-skewed.

### Card 22. Bernoulli CI and Chi-Squared
**Question:** Q1. CI for Bernoulli random variable. Examples.

Q2. The Chi-Squared Distribution. Examples.

**Short answer:** A1. For Bernoulli proportion \(p\), CI is built from \(\hat p\) and its standard error; exact methods also exist for small samples.

A2. Chi-squared distribution arises from squared normal sums and underlies tests for variance, independence, and goodness-of-fit.

**Key formula / notation:** Approximate CI: \(\hat p\pm z_{\alpha/2}\sqrt{\hat p(1-\hat p)/n}\); \(\chi^2=\sum (O-E)^2/E\) in categorical tests.

**Mini example:** Q1: 52 successes in 100 trials gives \(\hat p=0.52\), then compute 95% CI. Q2: Test whether survey responses fit expected category percentages.

**What to remember:** Proportion CIs quantify uncertainty in binary success rate; chi-squared compares observed vs expected structure.

### Card 23. Discrete Variables and Normal-Mean Test
**Question:** Q1. Discrete random variables. Examples.

Q2. Testing means of a Normal Population. Examples.

**Short answer:** A1. Discrete random variables take countable values with assigned masses. Example: number of emails received in an hour.

A2. Mean testing for normal population uses z or t statistic depending on known \(\sigma\); compare to critical values or use p-value.

**Key formula / notation:** \(p(x)=P(X=x)\); \(z=(\bar X-\mu_0)/(\sigma/\sqrt n)\), \(t=(\bar X-\mu_0)/(s/\sqrt n)\).

**Mini example:** Q1: \(X\)=children in family may take 0,1,2,... Q2: Test \(H_0:\mu=5\) from normal sample with unknown variance using t-test.

**What to remember:** Discrete means countable outcomes; normal-mean tests are core parametric inference tools.

### Card 24. Probability Properties and Regression Inference
**Question:** Q1. Properties of probability.

Q2. Inferences for regression coefficients. Examples.

**Short answer:** A1. Probability obeys nonnegativity, normalization, complement, and addition rules; these ensure coherent event calculations.

A2. Regression coefficient inference uses standard errors, t-tests, and CIs to evaluate predictor effects and uncertainty.

**Key formula / notation:** \(P(A^c)=1-P(A)\), \(P(A\cup B)=P(A)+P(B)-P(A\cap B)\); CI for slope: \(\hat\beta_1\pm t^*SE(\hat\beta_1)\).

**Mini example:** Q1: If \(P(A)=0.2,P(B)=0.5,P(A\cap B)=0.1\), then \(P(A\cup B)=0.6\). Q2: Slope CI excluding 0 indicates significant linear effect.

**What to remember:** Probability axioms are the foundation; regression inference translates fitted coefficients into conclusions.

### Card 25. Bayes Rule and Simple Linear Regression
**Question:** Q1. Bayes’ rule.

Q2. Simple linear regression model. Examples.

**Short answer:** A1. Bayes rule computes posterior probabilities by combining prior and likelihood from observed evidence.

A2. Simple linear regression relates one predictor to response with intercept, slope, and random error term.

**Key formula / notation:** \(P(B\mid A)=\frac{P(A\mid B)P(B)}{P(A)}\); \(Y=\beta_0+\beta_1X+\varepsilon\).

**Mini example:** Q1: After positive screening, compute disease probability using sensitivity/specificity and prevalence. Q2: Model fuel consumption as linear function of vehicle speed over a limited range.

**What to remember:** Bayes updates probabilities after evidence; SLR is the baseline predictive/explanatory linear model.
