import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

const SectionHeader = ({
  label,
  title,
  description,
  centered = true,
  light = false,
  className,
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        'mb-12 md:mb-16',
        centered && 'text-center max-w-3xl mx-auto',
        className
      )}
    >
      {label && (
        <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-4">
          {label}
        </span>
      )}
      <h2
        className={cn(
          'font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold mb-4',
          light ? 'text-white' : 'text-primary'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'text-lg leading-relaxed',
            light ? 'text-white/70' : 'text-muted-foreground'
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
