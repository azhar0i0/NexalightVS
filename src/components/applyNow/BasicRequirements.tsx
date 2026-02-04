import React from 'react'
import { AnimatedSection, StaggerContainer, StaggerItem, AnimatedCard } from '@/components/ui/AnimatedSection';
import { Check, ArrowRight, AlertCircle, Laptop, Wifi, User, Globe, Clock, Headphones } from 'lucide-react';

const requirements = [
  { icon: Laptop, text: 'Desktop or laptop computer (no tablets)' },
  { icon: Wifi, text: 'Reliable high-speed internet connection' },
  { icon: Headphones, text: 'USB headset with microphone' },
  { icon: Clock, text: 'Quiet, dedicated workspace' },
];

function BasicRequirements() {
  return (
      <section className="py-16 md:py-20 bg-background" aria-labelledby="requirements-heading">
              {/* Requirements Section */}
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <AnimatedSection className="text-center mb-12">
                  <h2 id="requirements-heading" className="text-2xl md:text-3xl font-bold text-foreground">
                    Basic Requirements
                  </h2>
                  <p className="mt-4 text-muted-foreground">
                    Before applying, make sure you meet these basic requirements:
                  </p>
                </AnimatedSection>
    
                <StaggerContainer className="grid gap-4 md:grid-cols-2">
                  {requirements.map((req, index) => {
                    const Icon = req.icon;
                    return (
                      <StaggerItem key={index}>
                        <AnimatedCard className="flex items-center gap-4 p-4 bg-card border border-border rounded-2xl hover:border-primary/30 transition-colors">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <span className="text-foreground">{req.text}</span>
                        </AnimatedCard>
                      </StaggerItem>
                    );
                  })}
                </StaggerContainer>
              </div>
            </div>
          </section>
  )
}

export default BasicRequirements
