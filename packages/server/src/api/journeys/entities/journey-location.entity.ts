import { Account } from '../../accounts/entities/accounts.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  ManyToMany,
  CreateDateColumn,
} from 'typeorm';
import { VisualLayout } from '../types/visual-layout.interface';
import { Step } from '@/api/steps/entities/step.entity';
import { Journey } from './journey.entity';

@Entity()
export class JourneyLocation {
  @PrimaryColumn({ name: 'journeyId' })
  @ManyToOne(() => Journey, (journey) => journey.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'journeyId' })
  public journey!: string;

  @PrimaryColumn()
  customer!: string;

  @JoinColumn()
  @ManyToOne(() => Step, (step) => step.id, { onDelete: 'CASCADE' })
  step!: Step;

  @JoinColumn()
  @ManyToOne(() => Account, (account) => account.id, { onDelete: 'CASCADE' })
  owner!: Account;

  // This is actually a timestamp using ECMAScript's native Date object; will yield
  // the same number across any timezone
  @Column({ type: 'bigint', nullable: false })
  stepEntry!: number;

  // This is actually a timestamp using ECMAScript's native Date object; will yield
  // the same number across any timezone
  @Column({
    type: 'bigint',
    nullable: true,
  })
  moveStarted?: number | null;
}
