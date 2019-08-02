import React from 'react';
import DayComponent from '../../components/meal-calendar/DayComponent';
import MealComponent from '../../components/meal-calendar/MealComponent';

import meals, { Meal, MealPlan } from '../../components/meal-calendar/meals';

import { Typography } from '@material-ui/core';

export default function MyMealPlan() {
  return (
    <div>
      <Typography variant="h6">June 10-16</Typography>
      {meals.map((m: MealPlan, i: number) => (
        <React.Fragment key={`frag-day-${i}`}>
          <DayComponent key={`day-${i}`} date={m.date}>
            {m.meals.map((e: Meal, j: number) => (
              <MealComponent key={`meal-${i}-${j}`} title={e.title}>
                {e.description}
              </MealComponent>
            ))}
          </DayComponent>
          <br />
        </React.Fragment>
      ))}
    </div>
  );
}
