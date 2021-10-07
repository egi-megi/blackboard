<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Environment;

class QuestionController extends AbstractController
{
    /**
     * @Route("/", name="app_homepage")
     */
    public function homepage(Environment $twigEnvironment)
    {
        /*
        // fun example of using the Twig service directly!
        $html = $twigEnvironment->render('question/homepage.html.twig');

        return new Response($html);
        */

        return $this->render('question/homepage.html.twig');
    }

    /**
     * @Route("/questions/{slug}", name="app_question_show")
     */
    public function show($slug)
    {
        $answers = [
            'Jak już porośniesz futrem to i tak będzie już za późno 🤣',
            'A czy na pewno chcesz wrócić i zamiast cały dzień wylegiwać się na kanapie musieć pracować.',
            'Nie wracaj',
        ];

        return $this->render('question/show.html.twig', [
            'question' => ucwords(str_replace('-', ' ', $slug)),
            'answers' => $answers,
        ]);
    }

    public function rand_dreamer() {
        $dreamers_array = array("Janek", "Julka");
        $rand_keys = array_rand($dreamers_array, 1);
        return $dreamer = $dreamers_array[$rand_keys[0]];
    }
}
