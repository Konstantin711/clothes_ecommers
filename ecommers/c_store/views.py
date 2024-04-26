from . import models
from . import serializers

from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response


# pathes:
    # - men(all)
    #   - men/c_type(all in type)
    #   - men/c_type/c_slug(choosen item) 
    # - woman(all)
    #   - woman/c_type(all in type)
    #   - woman/c_type/c_scug(choosen item)
    

@api_view()
def getBasicPage(request):
    return Response({'message': 'Initial view'})


@api_view()
def getAllByParent(request, slug):
    print(slug)
    if slug not in ['men', 'women']:
        return Response({'message': 'Resource not found'}, status=400)

    all_by_parent = models.Item.objects.prefetch_related('parent_type').prefetch_related('item_type').filter(parent_type__slug=str(slug))
    print(all_by_parent)
    serialized_data = serializers.ItemSerializer(all_by_parent, many=True).data

    return Response(
        dict(
            message='Data collected by parent slug',
            data=serialized_data
            )
        )



