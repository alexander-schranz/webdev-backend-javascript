<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Finder\Finder;
use Symfony\Component\Finder\SplFileInfo;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class PresentationController extends Controller
{
    /**
     * @Route("/", name="homepage")
     *
     * @param Request $request
     *
     * @return Response
     */
    public function indexAction(Request $request)
    {
        $slides = $this->getSlides((int) $request->get('slide', 0));

        // replace this example code with whatever you need
        $response = $this->render(
            'presentation/index.html.twig',
            [
                'slides' => $slides,
            ]
        );

        $response->setPublic();

        return $response;
    }

    /**
     * Get slides.
     *
     * @param bool $activeSlide
     *
     * @return array
     */
    private function getSlides($activeSlide)
    {
        // Because I'm a lazy person.
        $finder = new Finder();
        $files = $finder->files()->in(
            $this->get('kernel')->getRootDir() . '/Resources/views/presentation/slides'
        )->sortByName();

        $slides = [];

        $counter = 0;
        /** @var SplFileInfo $file */
        foreach ($files as $file) {
            $active = false;

            if ($counter === $activeSlide) {
                $active = true;
            }

            $slides[] = [
                'name' => explode('.', explode('-', $file->getFilename(), 2)[1], 2)[0],
                'template' => $file->getFilename(),
                'active' => $active,
            ];

            ++$counter;
        }

        return $slides;
    }
}
