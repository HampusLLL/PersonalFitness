import { test, expect } from '@playwright/test';

test('click add without sets/reps',async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/PersonalFitness/index.html');
  
    await page.locator('#muscle-group').selectOption('Chest');
    await page.click('text=Add');

    await expect(page.locator('#choosen-exercise')).toHaveCount(0);
  })
  
  test('click add with sets/reps', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/PersonalFitness/index.html');
  
    await page.locator('#muscle-group').selectOption('Chest');
    await page.selectOption('#sets', { value: '4-6'});
    await page.selectOption('#reps', { value: '6-12'});
    await page.click('#add-exercise');

    await expect(page.locator('#choosen-exercise')).toHaveCount(1);
  });
  
  test('add exercise then remove it', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/PersonalFitness/index.html');
  
    await page.locator('#muscle-group').selectOption('Chest');
    await page.selectOption('#sets', { value: '4-6'});
    await page.selectOption('#reps', { value: '6-12'});
    await page.click('#add-exercise');

    await expect(page.locator('#choosen-exercise')).toHaveCount(1);

    await page.click('#remove-exercise');

    await expect(page.locator('#choosen-exercise')).toHaveCount(0);
  });

  test('add two exercises then click reset', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/PersonalFitness/index.html');
  
    await page.locator('#muscle-group').selectOption('Chest');
    await page.selectOption('#sets', { value: '4-6'});
    await page.selectOption('#reps', { value: '6-12'});
    await page.click('#add-exercise');
    await page.selectOption('#sets', { value: '2-4'});
    await page.selectOption('#reps', { value: '2-5'});
    await page.click('#add-exercise');

    await expect(page.locator('#choosen-exercise')).toHaveCount(2);

    await page.click('#reset');

    await expect(page.locator('#choosen-exercise')).toHaveCount(0);
  });

  test('add two exercises and check amount text', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/PersonalFitness/index.html');
  
    await page.locator('#muscle-group').selectOption('Chest');
    await page.selectOption('#sets', { value: '4-6'});
    await page.selectOption('#reps', { value: '6-12'});
    await page.click('#add-exercise');

    await expect(page.locator('#amountText')).toHaveText('1 of 10 exercises');

    await page.selectOption('#sets', { value: '2-4'});
    await page.selectOption('#reps', { value: '2-5'});
    await page.click('#add-exercise');

    await expect(page.locator('#amountText')).toHaveText('2 of 10 exercises');
  });