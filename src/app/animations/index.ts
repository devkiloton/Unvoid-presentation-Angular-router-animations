import * as ANIMATIONS from '@angular/animations'

export const fader = 
    ANIMATIONS.trigger('routeAnimations', [
        ANIMATIONS.transition( '* <=> *', [
            ANIMATIONS.query(':enter, :leave', [
                ANIMATIONS.style({
                    position: 'absolute',
                    left: 0,
                    width: '100%',
                    opacity: 0,
                    transform: 'scale(0) translateY(100%)'
                })
            ]),
            ANIMATIONS.query(':enter', [
                ANIMATIONS.animate('1000ms ease', 
                    ANIMATIONS.style({ opacity: 1, transform: 'scale(1) translateY(0)'}))
            ])
        ])
    ])