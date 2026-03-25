import { cn } from "@/lib/utils";

interface StepProps {
  onNext: () => void;
  isCompleted: boolean;
  isStyled?: boolean;
}

export default function Step0Content({ onNext, isCompleted, isStyled }: StepProps) {
  
  if (!isStyled) {
    return (
      <section className="text-primary px-12" style={{ fontFamily: '"Times New Roman", Times, serif', lineHeight: 'normal' }}>
        <h1 style={{ fontSize: '2em', fontWeight: 'bold', margin: '0.67em 0' }}>{"Content is Everything"}</h1>
        <p style={{ margin: '1em 0' }}>
          {"Everything starts with content. Whether it's a product or a portfolio; the sole purpose of design is to present the content in the best possible way."}
        </p>
        <p style={{ margin: '1em 0' }}>
          {"More than 90% of the web is text. So, to make this raw text beautiful, what is the "} <span onClick={!isCompleted ? onNext : undefined} style={isCompleted ? { cursor: 'default' } : { color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>{"first thing to work on?"}</span>
        </p>
      </section>
    );
  }

  return (
    <section className="space-y-4 mb-20">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-3">{"Content is Everything"}</h1>
      <p className="text-lg text-muted-foreground">
        {"Everything starts with content. Whether it's a product or a portfolio; the sole purpose of design is to present the content in the best possible way."}
      </p>
      <p className="text-lg text-muted-foreground">
        {"More than 90% of the web is text. So, to make this raw text beautiful, what is the "} <span onClick={!isCompleted ? onNext : undefined} className={cn(isCompleted ? "cursor-default" : "underline underline-offset-2 cursor-pointer text-blue-600 hover:text-blue-800")}>{"first thing to work on?"}</span>
      </p>
    </section>
  );
}
