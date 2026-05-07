import React, { useEffect } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import LusidPayLogo from '../../assets/icons/lusidpay_logo.svg';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

import './styles.scss';

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────

const REGISTER_URL = 'https://certify.lusidpay.com/register';

const features = [
  {
    icon: <ForumOutlinedIcon />,
    title: 'AI-Guided Interview',
    body: 'Stop staring at a blank document. Our AI acts as a smart compliance guide, interviewing you step-by-step to extract the exact facts required by state certifiers.',
  },
  {
    icon: <VerifiedUserOutlinedIcon />,
    title: '4-Pillar Federal Mapping',
    body: 'Your narrative is automatically formatted to map perfectly to the required evaluation pillars: Education, Employment, Access to Capital, and Contracting.',
  },
  {
    icon: <ArticleOutlinedIcon />,
    title: 'Bulletproof Evidence',
    body: 'The platform automatically appends the required 28 U.S.C. § 1746 federal perjury declarations and provides standardized witness templates to close evidential gaps.',
  },
];

const standardFeatures = [
  'AI-Guided Plain English Interview',
  'Includes 1 Business Entity',
  'Includes 1 Disadvantaged Owner',
  'Mathematically Mapped CFR 49 Defense',
  'Instant Audit-Ready PDF Generation',
];

const multiEntityFeatures = [
  { label: 'Everything in Standard, plus:', bold: false },
  { label: 'Includes up to 2 Business Entities', bold: true },
  { label: 'Includes 1 Disadvantaged Owner', bold: false },
  { label: 'Shared Personal History Mapping', bold: false },
  { label: 'Multi-Entity Financial Cross-Checking', bold: false },
];

const primeFeatures = [
  'Bulk License Purchasing',
  'White-Glove Concierge Onboarding',
  'Sub-tier Compliance Tracking',
  'Dedicated Account Manager',
];

const faqs = [
  {
    q: "Can't I just write this myself or use free AI like ChatGPT?",
    a: "You can, but state analysts do not accept generic or emotional essays. A successful submission requires strict mapping to 49 CFR Part 26 and hyperlinked financial evidence. Generic AI tools cannot compile secure, audit-ready defense dossiers. Furthermore, inputting your highly sensitive corporate financial data into public AI models poses a massive security risk.",
  },
  {
    q: 'Is my financial data secure?',
    a: 'Absolutely. Lusid Certify provides a closed, encrypted, SOC-2 aligned vault. We process your data exclusively to generate your compliant PDF dossier, and your financial information is never used to train public language models.',
  },
  {
    q: 'Why is there an extra fee for multiple owners?',
    a: 'Under federal guidelines, every disadvantaged owner whose shares contribute to the required 51% majority must submit their own individual narrative and personal financial history. Processing an additional owner requires our system to run a completely separate compliance interview and defense compilation.',
  },
  {
    q: 'Will this work for my specific State DOT or UCP?',
    a: 'Yes. The requirement for a subjective Personal Narrative stems from the federal USDOT Interim Final Rule (49 CFR Part 26). Because our architecture maps directly to the federal statute, the resulting defense dossier is universally compliant for any certifying state agency nationwide.',
  },
  {
    q: 'How long does the process take?',
    a: 'Most business owners complete the AI-guided interview and document upload in 45 to 60 minutes. Your fully formatted, mathematically mapped PDF defense dossier is generated instantly upon completion, ready to be submitted to your state portal.',
  },
  {
    q: 'What happens next year when I need to recertify?',
    a: 'Compliance is not a one-time event; the state requires an annual update of your financials and recent business history. When you process your narrative through Lusid Certify, your baseline data is vaulted. Next year, our system will perform a streamlined "Delta Update" to cross-check your latest tax returns and append any new barriers you faced.',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

const DbeNarrativePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Box className="dbn-page">

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <Box className="dbn-hero">
        <Box className="dbn-hero__grid-bg" />
        <Container maxWidth="lg">
          <Box className="dbn-hero__content">
            <Box className="dbn-hero__badge">
              Urgent Update: New 49 CFR Part 26 Rules
            </Box>
            <Typography variant="h1" className="dbn-hero__title">
              Don't Let the New Personal Narrative Rules Cost You Your Certification.
            </Typography>
            <Typography className="dbn-hero__subtitle">
              The burden of proof has shifted. Presumptions are gone. Use our AI compliance engine
              to build a compliant, audit-ready Personal Narrative in minutes—without the massive fees.
            </Typography>
            <Box className="dbn-hero__cta-row">
              <Button
                variant="contained"
                className="dbn-hero__btn"
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Purchase License &amp; Start
              </Button>
            </Box>
            <Typography className="dbn-hero__footnote">
              Secure your license to instantly unlock the AI Narrative Engine.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ── Features ───────────────────────────────────────────────────────── */}
      <Box className="dbn-features">
        <Container maxWidth="lg">
          <Box className="dbn-features__header">
            <Typography variant="h2" className="dbn-features__title">
              The Rules Have Changed. We Adapted.
            </Typography>
            <Typography className="dbn-features__subtitle">
              Under the new USDOT interim final rules, every applicant must affirmatively prove
              economic disadvantage using the "preponderance of the evidence" standard. Blank pages
              lead to RFI loops and rejections. We fix that.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {features.map((f) => (
              <Grid item xs={12} md={4} key={f.title}>
                <Box className="dbn-feature-card">
                  <Box className="dbn-feature-card__icon">{f.icon}</Box>
                  <Typography className="dbn-feature-card__title">{f.title}</Typography>
                  <Typography className="dbn-feature-card__body">{f.body}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── Pricing ────────────────────────────────────────────────────────── */}
      <Box className="dbn-pricing" id="pricing">
        <Container maxWidth="lg">
          <Box className="dbn-pricing__header">
            <Typography variant="h2" className="dbn-pricing__title">
              Transparent, flat-fee pricing.
            </Typography>
            <Typography className="dbn-pricing__subtitle">
              No hourly bills or hidden consulting retainers.
            </Typography>
          </Box>

          <Grid container spacing={4} alignItems="flex-start">

            {/* Standard */}
            <Grid item xs={12} md={4}>
              <Box className="dbn-plan-card">
                <Typography className="dbn-plan-card__name">Standard Narrative</Typography>
                <Typography className="dbn-plan-card__description">Best for a single business entity.</Typography>
                <Typography className="dbn-plan-card__price">$499</Typography>
                <Box className="dbn-plan-card__rebate">
                  <Typography className="dbn-plan-card__rebate-primary">Effective Price: $399*</Typography>
                  <Typography className="dbn-plan-card__rebate-secondary">(After Activation Rebate)</Typography>
                </Box>
                <List className="dbn-plan-card__features" disablePadding>
                  {standardFeatures.map((f) => (
                    <ListItem key={f} disableGutters className="dbn-plan-card__feature-item">
                      <ListItemIcon className="dbn-plan-card__check">
                        <CheckIcon />
                      </ListItemIcon>
                      <ListItemText primary={f} className="dbn-plan-card__feature-text" />
                    </ListItem>
                  ))}
                </List>
                <Typography className="dbn-plan-card__addon">+$199 per additional owner/entity</Typography>
                <Button
                  fullWidth
                  variant="outlined"
                  className="dbn-plan-card__btn dbn-plan-card__btn--outline"
                  href={REGISTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Started
                </Button>
              </Box>
            </Grid>

            {/* Multi-Entity (Featured) */}
            <Grid item xs={12} md={4}>
              <Box className="dbn-plan-card dbn-plan-card--featured">
                <Box className="dbn-plan-card__badge">Most Popular</Box>
                <Typography className="dbn-plan-card__name">Multi-Entity Narrative</Typography>
                <Typography className="dbn-plan-card__description">
                  Best for owners with multiple certified firms.
                </Typography>
                <Typography className="dbn-plan-card__price">$699</Typography>
                <Box className="dbn-plan-card__rebate">
                  <Typography className="dbn-plan-card__rebate-primary">Effective Price: $599*</Typography>
                  <Typography className="dbn-plan-card__rebate-secondary">(After Activation Rebate)</Typography>
                </Box>
                <List className="dbn-plan-card__features" disablePadding>
                  {multiEntityFeatures.map((f) => (
                    <ListItem key={f.label} disableGutters className="dbn-plan-card__feature-item">
                      <ListItemIcon className="dbn-plan-card__check">
                        <CheckIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={f.label}
                        className={`dbn-plan-card__feature-text${f.bold ? ' dbn-plan-card__feature-text--bold' : ''}`}
                      />
                    </ListItem>
                  ))}
                </List>
                <Typography className="dbn-plan-card__addon">+$199 per additional owner/entity</Typography>
                <Button
                  fullWidth
                  variant="contained"
                  className="dbn-plan-card__btn dbn-plan-card__btn--filled"
                  href={REGISTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Started
                </Button>
              </Box>
            </Grid>

            {/* Prime Assist */}
            <Grid item xs={12} md={4}>
              <Box className="dbn-plan-card">
                <Typography className="dbn-plan-card__name">Prime Assist</Typography>
                <Typography className="dbn-plan-card__description">
                  Best for Prime Contractors securing their subs.
                </Typography>
                <Typography className="dbn-plan-card__price dbn-plan-card__price--custom">
                  Custom Volume
                </Typography>
                <List className="dbn-plan-card__features dbn-plan-card__features--spacer" disablePadding>
                  {primeFeatures.map((f) => (
                    <ListItem key={f} disableGutters className="dbn-plan-card__feature-item">
                      <ListItemIcon className="dbn-plan-card__check">
                        <CheckIcon />
                      </ListItemIcon>
                      <ListItemText primary={f} className="dbn-plan-card__feature-text" />
                    </ListItem>
                  ))}
                </List>
                <Button
                  fullWidth
                  variant="outlined"
                  className="dbn-plan-card__btn dbn-plan-card__btn--outline"
                  href="mailto:sales@lusidpay.com"
                >
                  Talk to Sales
                </Button>
              </Box>
            </Grid>
          </Grid>

          {/* LusidPay Rebate Banner */}
          <Box className="dbn-rebate">
            <Box className="dbn-rebate__text">
              <Typography className="dbn-rebate__title">* The LusidPay LTV Rebate</Typography>
              <Typography className="dbn-rebate__body">
                Waiting 60+ days for Primes to pay invoices is the biggest hurdle for DBEs. We want
                to solve your cash flow, not just your compliance.
              </Typography>
              <Typography className="dbn-rebate__body">
                Your Lusid Certify license includes full access to the{' '}
                <strong>LusidPay AP/AR platform</strong>. Connect your accounting software and run
                your vendor payments through us for 3 months, and we will instantly issue a{' '}
                <strong>$100 statement credit</strong> back to your linked bank account. Plus, active
                users permanently lock in a{' '}
                <strong>50% discount on Streamlined Annual Renewals</strong>—allowing our AI to
                securely update your financial cross-checks every year without starting from scratch.
              </Typography>
            </Box>
            <Box className="dbn-rebate__logo">
              <img src={LusidPayLogo} alt="LusidPay" style={{ width: '280px', filter: 'brightness(0) invert(1)' }} />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── FAQ ────────────────────────────────────────────────────────────── */}
      <Box className="dbn-faq">
        <Container maxWidth="lg">
          <Typography variant="h2" className="dbn-faq__title">
            Frequently Asked Questions
          </Typography>
          <Grid container spacing={3}>
            {faqs.map((item) => (
              <Grid item xs={12} md={6} key={item.q}>
                <Box className="dbn-faq__card">
                  <Typography className="dbn-faq__question">{item.q}</Typography>
                  <Typography className="dbn-faq__answer">{item.a}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── Final CTA ──────────────────────────────────────────────────────── */}
      <Box className="dbn-cta">
        <Container maxWidth="md">
          <Typography variant="h2" className="dbn-cta__title">
            Ready to Build Your Audit-Ready Dossier?
          </Typography>
          <Typography className="dbn-cta__subtitle">
            Join the forward-thinking DBEs using Lusid Certify to bypass the red tape and secure
            their certifications.
          </Typography>
          <Button
            variant="contained"
            className="dbn-cta__btn"
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Purchase License &amp; Launch the AI Engine
          </Button>
        </Container>
      </Box>

    </Box>
  );
};

export default DbeNarrativePage;
