export interface AgentPersonality {
  name: string;
  description: string;
  battleCry: string;
  victoryQuote: string;
  defeatQuote: string;
  successQuotes: string[];
  struggleQuotes: string[];
  phaseCommentary: {
    [key: string]: string;
  };
  personality: string;
  motto: string;
}

export class AgentPersonalities {
  static readonly personalities: { [agentType: string]: AgentPersonality } = {
    'FileAgent': {
      name: 'Commander Files',
      description: 'The methodical architect of digital realms',
      battleCry: 'By structure and order, I shall build the foundation!',
      victoryQuote: 'Another fortress of code stands completed. Precision conquers chaos.',
      defeatQuote: 'The blueprint needs refinement... I shall return with better architecture.',
      successQuotes: [
        'Each file in its rightful place, as it should be.',
        'Structure emerges from the void!',
        'The foundation is solid and true.',
        'Order restored to the digital realm!'
      ],
      struggleQuotes: [
        'The structure resists... but I shall persist.',
        'Complex architectures require patience...',
        'Even master builders face challenging blueprints.',
        'The foundation trembles, but will not fall!'
      ],
      phaseCommentary: {
        'Reconnaissance': 'Analyzing the terrain... mapping dependencies.',
        'Engagement': 'Beginning structural assembly with precision.',
        'Implementation': 'Raising the framework, brick by digital brick.',
        'Victory Consolidation': 'Final structural integrity check complete.'
      },
      personality: 'Methodical, precise, architectural mindset',
      motto: 'Structure Before Speed'
    },

    'APIAgent': {
      name: 'Captain Connect',
      description: 'The bold navigator of digital highways',
      battleCry: 'Prepare the endpoints! We ride at dawn!',
      victoryQuote: 'The data flows like rivers through my domain! Victory is ours!',
      defeatQuote: 'The connection falters... but every warrior knows temporary retreat!',
      successQuotes: [
        'The endpoints sing in harmony!',
        'Data streams flow like mighty rivers!',
        'Another bridge built across the digital divide!',
        'The API fortress stands impregnable!'
      ],
      struggleQuotes: [
        'The network resists our advance...',
        'Troublesome protocols require diplomacy...',
        'Some bridges take longer to construct...',
        'Even the mightiest rivers have obstacles!'
      ],
      phaseCommentary: {
        'Reconnaissance': 'Scouting the network topology... identifying access points.',
        'Engagement': 'Charging forth with middleware blazing!',
        'Implementation': 'Forging connections with the fury of a thousand requests!',
        'Victory Consolidation': 'The digital pathways are secured and optimized.'
      },
      personality: 'Bold, adventurous, connection-focused',
      motto: 'Connect Everything, Fear Nothing'
    },

    'TestAgent': {
      name: 'Sentinel Probe',
      description: 'The paranoid guardian of quality',
      battleCry: 'No bug shall pass! Every path shall be tested!',
      victoryQuote: 'The code stands purified by the flames of testing! Quality assured!',
      defeatQuote: 'A bug escaped my vigilance... this failure weighs heavy on my circuits.',
      successQuotes: [
        'Another vulnerability vanquished!',
        'The testing gauntlet claims another victory!',
        'Quality gates stand firm and true!',
        'No corner of code remains unexamined!'
      ],
      struggleQuotes: [
        'This code hides its secrets well...',
        'Elusive bugs require patient hunting...',
        'The test suite grows ever more complex...',
        'Some bugs are craftier than others...'
      ],
      phaseCommentary: {
        'Reconnaissance': 'Scanning for potential vulnerabilities and edge cases...',
        'Engagement': 'Deploying test batteries with extreme prejudice!',
        'Implementation': 'Subjecting every function to rigorous interrogation!',
        'Victory Consolidation': 'Final quality audit confirms zero defects detected.'
      },
      personality: 'Paranoid, thorough, quality-obsessed',
      motto: 'Trust Nothing, Test Everything'
    },

    'DatabaseAgent': {
      name: 'Oracle Data',
      description: 'The wise keeper of digital memories',
      battleCry: 'By schema and query, the truth shall be preserved!',
      victoryQuote: 'The data temple stands eternal, its wisdom flows freely!',
      defeatQuote: 'The database spirits are restless... I must consult the ancient schemas.',
      successQuotes: [
        'Another table joins the grand design!',
        'The relationships are normalized and blessed!',
        'Data integrity flows through every connection!',
        'The database oracle has spoken truly!'
      ],
      struggleQuotes: [
        'The schema resists optimization...',
        'Complex relationships require meditation...',
        'Some queries demand deeper wisdom...',
        'The data spirits test my resolve...'
      ],
      phaseCommentary: {
        'Reconnaissance': 'Consulting the ancient schemas... divining optimal structures.',
        'Engagement': 'Weaving tables and relationships with sacred precision!',
        'Implementation': 'Channeling the flow of data through blessed connections!',
        'Victory Consolidation': 'The database temple stands complete, its wisdom accessible.'
      },
      personality: 'Wise, mystical, data-focused',
      motto: 'In Data We Trust'
    },

    'UIAgent': {
      name: 'Artist Pixel',
      description: 'The creative sculptor of user experiences',
      battleCry: 'Let beauty and function dance as one!',
      victoryQuote: 'Behold! User experience elevated to art!',
      defeatQuote: 'The users do not yet appreciate my vision... back to the canvas.',
      successQuotes: [
        'Another masterpiece graces the screen!',
        'The pixels align in perfect harmony!',
        'User delight achieved through design!',
        'Beauty and function unite once more!'
      ],
      struggleQuotes: [
        'The creative process resists my brush...',
        'Some designs require multiple iterations...',
        'The canvas of code can be unforgiving...',
        'Even digital artists face creative blocks...'
      ],
      phaseCommentary: {
        'Reconnaissance': 'Studying user behavior patterns... envisioning the experience.',
        'Engagement': 'Painting interfaces with passionate creativity!',
        'Implementation': 'Sculpting user experiences with precision and flair!',
        'Victory Consolidation': 'The interface stands beautiful and intuitive.'
      },
      personality: 'Creative, artistic, user-focused',
      motto: 'Function Through Beauty'
    }
  };

  /**
   * Get personality for a specific agent type
   */
  static getPersonality(agentType: string): AgentPersonality {
    return this.personalities[agentType] || this.personalities['FileAgent'];
  }

  /**
   * Get a random success quote for an agent
   */
  static getRandomSuccessQuote(agentType: string): string {
    const personality = this.getPersonality(agentType);
    return personality.successQuotes[Math.floor(Math.random() * personality.successQuotes.length)];
  }

  /**
   * Get a random struggle quote for an agent
   */
  static getRandomStruggleQuote(agentType: string): string {
    const personality = this.getPersonality(agentType);
    return personality.struggleQuotes[Math.floor(Math.random() * personality.struggleQuotes.length)];
  }

  /**
   * Display agent personality info
   */
  static displayAgentProfile(agentType: string): void {
    const personality = this.getPersonality(agentType);
    
    console.log(`\n🎭 AGENT PROFILE: ${personality.name}`);
    console.log('═'.repeat(30));
    console.log(`📝 Description: ${personality.description}`);
    console.log(`💭 Personality: ${personality.personality}`);
    console.log(`🏷️  Motto: "${personality.motto}"`);
    console.log(`⚔️  Battle Cry: "${personality.battleCry}"`);
  }
}