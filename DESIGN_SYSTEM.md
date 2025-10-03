# LoveDanceLive Design System

This document outlines the consistent design patterns to be used across all pages of the LoveDanceLive website.

## Color Palette

- **Turquoise** (`--turquoise`): #40E0D0 - Primary brand color
- **Neon Pink** (`--neon-pink`): #FF1493 - Accent color
- **Baby Pink** (`--baby-pink`): #FFC0CB - Secondary color
- **Light Blue** (`--light-blue`): #ADD8E6 - Tertiary color

## Utility Classes

### Gradient Text
```tsx
// Main headings with gradient
<h1 className="gradient-text-hero">Your Heading</h1>

// Alternative gradient
<h1 className="gradient-text">Your Heading</h1>
```

### Section Headings with Underline
```tsx
<div className="text-center mb-8">
  <div className="inline-block">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold gradient-text-hero mb-4">
      Your Global Stage Awaits
    </h2>
    <div className="h-1.5 w-32 bg-gradient-to-r from-turquoise to-neon-pink mx-auto rounded-full"></div>
  </div>
</div>
```

### Content Cards
```tsx
<div className="content-card">
  {/* Your content */}
</div>
```

Or with custom styling:
```tsx
<div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 sm:p-10 shadow-2xl border border-white/50 hover:scale-[1.02] transition-all duration-300">
  {/* Your content */}
</div>
```

### Gradient Icon Backgrounds
```tsx
<div className="gradient-icon-bg">
  <Trophy className="h-12 w-12 text-white" />
</div>
```

Or inline:
```tsx
<div className="p-5 bg-gradient-to-br from-turquoise via-turquoise to-neon-pink rounded-2xl shadow-xl">
  <Trophy className="h-12 w-12 text-white" />
</div>
```

### Text Highlighting (Brand Name)
```tsx
<p>Welcome to <span className="text-highlight">LoveDanceLive</span> — your global stage...</p>
```

Or with custom styling:
```tsx
<p>Welcome to <span className="font-bold text-turquoise">LoveDanceLive</span> — your global stage...</p>
```

## Page Structure Template

### 1. Hero Section
```tsx
<section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0">
    <img src={heroImage} alt="..." className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/90 via-primary/85 to-turquoise/90"></div>
  </div>
  
  <div className="relative z-10 container mx-auto px-3 sm:px-4 lg:px-6 text-center">
    <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 animate-fade-in">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-poppins font-bold text-white drop-shadow-lg">
        Your Hero Heading
      </h1>
      <p className="text-lg sm:text-xl font-open-sans text-white/95 max-w-2xl mx-auto">
        Your subheading text
      </p>
    </div>
  </div>
</section>
```

### 2. Welcome/Content Section
```tsx
<section className="py-8 sm:py-10 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
  <div className="container mx-auto px-3 sm:px-4 lg:px-6">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-block">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold gradient-text-hero mb-4">
            Section Heading
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-turquoise to-neon-pink mx-auto rounded-full"></div>
        </div>
      </div>
      <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 sm:p-10 shadow-2xl border border-white/50">
        <p className="text-lg sm:text-xl text-foreground/90 leading-relaxed text-center">
          Your content with <span className="font-bold text-turquoise">highlighted text</span>
        </p>
      </div>
    </div>
  </div>
</section>
```

### 3. Cards Grid Section
```tsx
<section className="py-8 sm:py-10">
  <div className="container mx-auto px-3 sm:px-4 lg:px-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
      <Card className="bg-gradient-to-br from-turquoise/10 to-turquoise/5 border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <CardContent className="p-6 text-center">
          <div className="gradient-icon-bg w-fit mx-auto mb-4">
            <Icon className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-poppins font-bold text-foreground mb-3">Card Title</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Card content
          </p>
        </CardContent>
      </Card>
    </div>
  </div>
</section>
```

### 4. CTA Section
```tsx
<section className="py-8 sm:py-10">
  <div className="container mx-auto px-3 sm:px-4 lg:px-6">
    <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 border-primary/20 max-w-2xl mx-auto shadow-lg hover:shadow-xl transition-shadow">
      <CardContent className="p-6 sm:p-10 text-center">
        <h3 className="text-2xl sm:text-3xl font-poppins font-bold text-foreground mb-3">
          CTA Heading
        </h3>
        <p className="text-base sm:text-lg text-muted-foreground mb-6">
          CTA description text
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button size="lg" className="hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
            Primary Action
          </Button>
          <Button size="lg" variant="outline" className="hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
            Secondary Action
          </Button>
        </div>
      </CardContent>
    </Card>
  </div>
</section>
```

## Consistent Spacing

- Page background: `className="page-gradient-bg"` or `className="bg-gradient-to-b from-background via-muted/20 to-background"`
- Section padding: `py-8 sm:py-10` (reduced for compact layout)
- Container: `container mx-auto px-3 sm:px-4 lg:px-6`
- Section spacing: `mb-8 sm:mb-10` between major sections

## Typography

- **Headings**: `font-poppins` (Poppins font family)
- **Body text**: `font-open-sans` (Open Sans font family)
- **Hero heading**: `text-3xl sm:text-4xl md:text-6xl`
- **Section heading**: `text-3xl sm:text-4xl md:text-5xl`
- **Body text**: `text-lg sm:text-xl`

## Animations

- Fade in: `animate-fade-in`
- Scale in: `animate-scale-in`
- Hover scale: `hover:scale-105` or `hover:-translate-y-1`
- Transitions: `transition-all duration-300`

## Buttons

Use semantic color variants:
```tsx
// Primary CTA (neon pink)
<Button className="hover:shadow-lg transform hover:-translate-y-0.5 transition-all">

// Secondary (turquoise)
<Button variant="secondary" className="hover:shadow-lg transform hover:-translate-y-0.5 transition-all">

// Outline
<Button variant="outline" className="hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
```

## Quick Checklist for Each Page

✅ Hero section with gradient overlay and gradient text  
✅ Section headings with gradient underlines  
✅ Content cards with white background, shadow, and hover effects  
✅ Icons with gradient backgrounds  
✅ Consistent spacing (py-8 sm:py-10)  
✅ Brand name highlighted in turquoise  
✅ Gradient backgrounds with subtle patterns  
✅ Smooth transitions and hover animations  
✅ Responsive text sizes  
✅ CTA section at the bottom
