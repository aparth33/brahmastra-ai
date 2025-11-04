import chalk from 'chalk';
import { Task } from '../types';

export interface BattleStats {
  health: number;
  energy: number;
  experience: number;
  battleCries: number;
}

export class BattleSimulator {
  private static delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  /**
   * Simulates an epic battle sequence for task execution
   */
  static async simulateBattle(task: Task, agentPersonality: any): Promise<boolean> {
    const stats: BattleStats = {
      health: 100,
      energy: 100,
      experience: 0,
      battleCries: 0
    };

    console.log(chalk.bold.red('\n┌─────────────────────────────────────────────────────────────┐'));
    console.log(chalk.bold.red('│') + chalk.bold.yellow('                    ⚔️  BATTLE COMMENCING  ⚔️                    ') + chalk.bold.red('│'));
    console.log(chalk.bold.red('└─────────────────────────────────────────────────────────────┘'));

    // Agent enters the battlefield
    await this.agentEntry(task, agentPersonality, stats);
    
    // Battle phases
    const phases = [
      { name: 'Reconnaissance', duration: 1000, difficulty: 0.2 },
      { name: 'Engagement', duration: 1500, difficulty: 0.6 },
      { name: 'Implementation', duration: 2000, difficulty: 0.8 },
      { name: 'Victory Consolidation', duration: 800, difficulty: 0.3 }
    ];

    for (const phase of phases) {
      const success = await this.executeBattlePhase(phase, agentPersonality, stats);
      if (!success && Math.random() < 0.1) {
        await this.battleDefeat(agentPersonality, stats);
        return false;
      }
    }

    await this.battleVictory(task, agentPersonality, stats);
    return true;
  }

  private static async agentEntry(task: Task, agent: any, stats: BattleStats) {
    console.log(chalk.cyan(`\n🚀 ${agent.name} approaches the battlefield...`));
    console.log(chalk.gray(`   Target: ${task.description}`));
    console.log(chalk.gray(`   Difficulty: ${this.getDifficultyStars(task)}`));
    
    await this.delay(500);
    
    // Agent battle cry
    console.log(chalk.bold.green(`\n💬 ${agent.name}: "${agent.battleCry}"`));
    stats.battleCries++;
    
    await this.delay(1000);
    this.displayStats(stats);
  }

  private static async executeBattlePhase(phase: any, agent: any, stats: BattleStats): Promise<boolean> {
    console.log(chalk.bold.blue(`\n⚔️  PHASE: ${phase.name.toUpperCase()}`));
    console.log(chalk.blue('═'.repeat(phase.name.length + 10)));

    // Agent phase commentary
    const commentary = agent.phaseCommentary[phase.name] || "Engaging with full force!";
    console.log(chalk.yellow(`💭 ${agent.name}: "${commentary}"`));

    // Animated progress bar
    await this.animatedProgressBar(phase.duration, phase.difficulty);

    // Calculate phase results
    const energyCost = Math.floor(phase.difficulty * 30);
    const healthCost = Math.floor(phase.difficulty * 15);
    const expGain = Math.floor(phase.difficulty * 25);

    stats.energy = Math.max(0, stats.energy - energyCost);
    stats.health = Math.max(0, stats.health - healthCost);
    stats.experience += expGain;

    // Phase completion
    if (Math.random() > phase.difficulty * 0.7) {
      console.log(chalk.green(`✅ Phase completed successfully!`));
      console.log(chalk.yellow(`💬 ${agent.name}: "${agent.successQuotes[Math.floor(Math.random() * agent.successQuotes.length)]}"`));
    } else {
      console.log(chalk.yellow(`⚠️  Phase completed with minor setbacks`));
      console.log(chalk.yellow(`💬 ${agent.name}: "${agent.struggleQuotes[Math.floor(Math.random() * agent.struggleQuotes.length)]}"`));
      stats.health -= 10;
    }

    this.displayStats(stats);
    await this.delay(800);

    return stats.health > 0;
  }

  private static async animatedProgressBar(duration: number, difficulty: number): Promise<void> {
    const steps = 20;
    const stepDuration = duration / steps;
    
    process.stdout.write(chalk.gray('\n   Progress: ['));
    
    for (let i = 0; i < steps; i++) {
      await this.delay(stepDuration);
      
      // Add some battle effects
      if (Math.random() < difficulty && i > 5) {
        if (Math.random() < 0.3) {
          process.stdout.write(chalk.red('💥')); // Battle intensity
        } else if (Math.random() < 0.5) {
          process.stdout.write(chalk.yellow('⚡')); // Energy burst  
        } else {
          process.stdout.write(chalk.green('█')); // Progress
        }
      } else {
        process.stdout.write(chalk.green('█'));
      }
    }
    
    process.stdout.write(chalk.gray('] Complete!\n'));
  }

  private static displayStats(stats: BattleStats) {
    const healthBar = this.createStatBar(stats.health, 100, '❤️', chalk.red);
    const energyBar = this.createStatBar(stats.energy, 100, '⚡', chalk.blue);
    const expBar = this.createStatBar(stats.experience, 100, '🌟', chalk.yellow);

    console.log(chalk.gray('\n   ┌─ AGENT STATUS ─┐'));
    console.log(chalk.gray('   │') + ` Health: ${healthBar} ${stats.health}%` + chalk.gray('  │'));
    console.log(chalk.gray('   │') + ` Energy: ${energyBar} ${stats.energy}%` + chalk.gray('  │'));
    console.log(chalk.gray('   │') + ` XP:     ${expBar} ${stats.experience}%` + chalk.gray('  │'));
    console.log(chalk.gray('   └─────────────────┘'));
  }

  private static createStatBar(current: number, max: number, icon: string, colorFn: any): string {
    const barLength = 10;
    const filled = Math.floor((current / max) * barLength);
    const empty = barLength - filled;
    
    return icon + ' ' + colorFn('█'.repeat(filled)) + chalk.gray('░'.repeat(empty));
  }

  private static async battleVictory(task: Task, agent: any, stats: BattleStats) {
    console.log(chalk.bold.green('\n🎉 VICTORY ACHIEVED! 🎉'));
    console.log(chalk.green('═'.repeat(25)));
    
    // Epic victory sound
    console.log('\u0007'); // Terminal bell
    
    // Victory animation
    const victoryFrames = ['🏆', '✨', '🎊', '🎉', '🌟'];
    for (let i = 0; i < 3; i++) {
      for (const frame of victoryFrames) {
        process.stdout.write(`\r   ${frame} MISSION ACCOMPLISHED ${frame}`);
        await this.delay(200);
      }
    }
    console.log('\n');
    
    console.log(chalk.bold.yellow(`💬 ${agent.name}: "${agent.victoryQuote}"`));
    
    // Final stats
    console.log(chalk.green(`\n📊 BATTLE STATISTICS:`));
    console.log(chalk.white(`   🎯 Mission: ${task.description}`));
    console.log(chalk.white(`   ⚔️  Final Health: ${stats.health}%`));
    console.log(chalk.white(`   🌟 Experience Gained: ${stats.experience} XP`));
    console.log(chalk.white(`   📢 Battle Cries: ${stats.battleCries}`));
    
    await this.delay(1000);
  }

  private static async battleDefeat(agent: any, stats: BattleStats) {
    console.log(chalk.bold.red('\n💀 MISSION FAILED 💀'));
    console.log(chalk.red('═'.repeat(20)));
    
    console.log(chalk.red(`💬 ${agent.name}: "${agent.defeatQuote}"`));
    console.log(chalk.gray(`   The agent will regroup and return stronger...`));
    
    await this.delay(1000);
  }

  private static getDifficultyStars(task: Task): string {
    // Simple difficulty assessment based on task description
    const complexity = task.description.length + (task.dependencies.length * 10);
    if (complexity > 80) return '⭐⭐⭐⭐⭐ (LEGENDARY)';
    if (complexity > 60) return '⭐⭐⭐⭐ (EPIC)';
    if (complexity > 40) return '⭐⭐⭐ (HARD)';
    if (complexity > 20) return '⭐⭐ (MEDIUM)';
    return '⭐ (EASY)';
  }
}