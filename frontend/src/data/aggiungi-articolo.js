#!/usr/bin/env node

/**
 * 📝 AGGIUNGI NUOVO ARTICOLO AL BLOG
 * 
 * Questo script ti guida nell'aggiunta di un nuovo articolo.
 * Risponde alle domande e il codice viene generato automaticamente!
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

async function main() {
  console.log('\n🎨 AGGIUNGI NUOVO ARTICOLO AL BLOG\n');
  console.log('Rispondo alle domande qui sotto, il resto lo faccio io!\n');

  try {
    const title = await question('📌 Titolo dell\'articolo: ');
    const excerpt = await question('📝 Breve descrizione (1-2 righe): ');
    
    console.log('\n📂 Categoria:');
    console.log('  1. Marketing');
    console.log('  2. Strategia');
    console.log('  3. Mindset');
    const categoryChoice = await question('Scegli (1, 2, o 3): ');
    const categories = { '1': 'Marketing', '2': 'Strategia', '3': 'Mindset' };
    const category = categories[categoryChoice] || 'Marketing';

    const date = await question('📅 Data (es: "2025" o "Gen 2025"): ');
    const readTime = await question('⏱️  Tempo di lettura (es: "5 min"): ');
    const imageUrl = await question('🖼️  URL immagine (da Unsplash o altro): ');

    console.log('\n✍️  Ora scrivi il contenuto dell\'articolo.');
    console.log('Puoi usare:');
    console.log('  # Titolo H1');
    console.log('  ## Titolo H2');
    console.log('  ### Titolo H3');
    console.log('  - Lista punto');
    console.log('  **testo grassetto**');
    console.log('\nQuando hai finito, scrivi "FINE" su una riga vuota.\n');

    let content = '';
    let line = '';
    while (line !== 'FINE') {
      line = await question('');
      if (line !== 'FINE') {
        content += line + '\n';
      }
    }

    // Genera slug da titolo
    const slug = title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');

    const newArticle = {
      id: slug,
      slug: slug,
      title: title,
      excerpt: excerpt,
      category: category,
      date: date,
      readTime: readTime,
      image: imageUrl,
      content: content.trim() + '\n\n---\n\n**Nico**benz · Beauty Social Coach\n    '
    };

    // Leggi file esistente
    const filePath = path.join(__dirname, 'blogArticles.js');
    let fileContent = fs.readFileSync(filePath, 'utf-8');

    // Trova dove inserire il nuovo articolo (all'inizio dell'array)
    const arrayStart = fileContent.indexOf('[');
    const insertPosition = fileContent.indexOf('{', arrayStart);

    const articleCode = JSON.stringify(newArticle, null, 2)
      .replace(/"([^"]+)":/g, '$1:')  // Rimuovi quotes dalle chiavi
      .replace(/\\n/g, '\n');  // Converti \n in newline reali

    const newFileContent = 
      fileContent.slice(0, insertPosition) +
      articleCode + ',\n  ' +
      fileContent.slice(insertPosition);

    // Salva file
    fs.writeFileSync(filePath, newFileContent, 'utf-8');

    console.log('\n✅ ARTICOLO AGGIUNTO CON SUCCESSO!');
    console.log(`\n📄 Slug: ${slug}`);
    console.log(`🔗 URL: /blog/${slug}`);
    console.log('\n📋 PROSSIMI PASSI:');
    console.log('1. Fai "Save to GitHub" su Emergent');
    console.log('2. Vercel auto-deploya (2 min)');
    console.log('3. Articolo online! 🎉\n');

  } catch (error) {
    console.error('❌ Errore:', error.message);
  } finally {
    rl.close();
  }
}

main();
