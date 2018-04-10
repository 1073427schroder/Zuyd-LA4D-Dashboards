import { PrestatieAspect } from "./prestatie-aspect";

export class PrestatieIndicator{
  pi: number;
  description: string;
  product: string;
  criteria: string;
  instructions: string;
  aspects: PrestatieAspect[];
}
